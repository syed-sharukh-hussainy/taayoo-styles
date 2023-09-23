import { NextResponse } from 'next/server';
import { format } from 'prettier';
import * as prettierPluginBabel from 'prettier/plugins/babel';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { code } = body;

    if (!code) {
      return new NextResponse('Code is required', { status: 401 });
    }

    const formattedCode = await format(code, {
      semi: true,
      parser: 'babel',
      plugins: [prettierPluginBabel],
      singleQuote: true,
    });
    return NextResponse.json(formattedCode);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
