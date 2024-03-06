import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email/ContactForm';
import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { env } from 'process';

const prisma = new PrismaClient();

const resend = new Resend(env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextApiResponse) {
  const { name, email } = await req.json();

  try {
    const existingEmail = await prisma.email.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return Response.json(
        { msg: 'Email already exists in the database' },
        { status: 400 }
      );
    }

    await prisma.email.create({
      data: {
        name,
        email,
      },
    });

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'elrincondeldev.business@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
      react: EmailTemplate({ name, email }),
    });

    return Response.json(
      { msg: 'Email sent successfully', name },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ msg: 'Something went wrong' }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
}
