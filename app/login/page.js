import { APP_URL } from '@/lib/contsants';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  const appUrl = APP_URL;

  if (!appUrl) {
    throw new Error('APP_URL environment variable is not defined');
  }

  redirect(`${appUrl}login`);
}