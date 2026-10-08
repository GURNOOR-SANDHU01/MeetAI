import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting MeetAI database seed...');

  const passwordHash = await bcrypt.hash('password123', 10);

  // 1. Create Workspace
  const workspace = await prisma.workspace.create({
    data: {
      id: 'ws-acme-corp',
      name: 'Acme Corp Workspace',
      plan: 'Enterprise Pro',
      retentionDays: 365
    }
  });

  // 2. Create Users
  const user1 = await prisma.user.create({
    data: {
      id: 'u1',
      name: 'Gurnoor Singh',
      email: 'gurnoor@acme-corp.com',
      passwordHash,
      role: 'OWNER',
      workspaceId: workspace.id,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    }
  });

  const user2 = await prisma.user.create({
    data: {
      id: 'u2',
      name: 'Sarah Chen',
      email: 'sarah.chen@acme-corp.com',
      passwordHash,
      role: 'ADMIN',
      workspaceId: workspace.id,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
    }
  });

  // 3. Create Meeting
  const meeting = await prisma.meeting.create({
    data: {
      id: 'm1',
      workspaceId: workspace.id,
      title: 'Q3 Product & Engineering Architecture Review',
      platform: 'google-meet',
      date: 'Oct 8, 2026',
      time: '10:00 AM - 11:15 AM',
      duration: '75 mins',
      status: 'COMPLETED',
      fileSize: '412 MB',
      sentimentScore: 92,
      sentimentText: 'Very Positive / High Alignment',
      participants: {
        create: [
          { name: 'Gurnoor Singh', role: 'Head of Product' },
          { name: 'Sarah Chen', role: 'Lead Architect' }
        ]
      },
      summary: {
        create: {
          overview: 'Evaluated backend infrastructure performance. Agreed to adopt Redis Cluster and postpone GraphQL to Q4.',
          keyPoints: {
            create: [
              { pointIndex: 1, text: 'Adopt Redis Cluster with 3 primary nodes.' },
              { pointIndex: 2, text: 'Postpone GraphQL migration to Q4.' }
            ]
          }
        }
      }
    }
  });

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
