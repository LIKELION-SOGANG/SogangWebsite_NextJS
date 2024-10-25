import type { Metadata } from 'next'
import '@/style/globals.css'
import { Figtree, Pp, Pretendard } from '@/utils/Font'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

//
//
//
export const metadata: Metadata = {
  title: '서강대학교 멋쟁이사자처럼 공식홈페이지',
  metadataBase: new URL('https://likelion-nextjs.vercel.app/'),
  description:
    '서강대학교 멋쟁이사자처럼의 공식 홈페이지입니다. 서강대학교 멋쟁이사자처럼의 역사, 수상내역, 알럼나이 아웃풋, 타임라인에 대해 소개합니다. 정기 교육 세션인 Lion Sprint에서 배우는 기술 스택들을 소개합니다. '
}
//
//
//
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="kr"
      className={`${Figtree.variable} ${Pp.variable} ${Pretendard.variable}`}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      <body
        className={`${Figtree.className} ${Pp.className} ${Pretendard.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
