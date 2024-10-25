'use-client'
import { FOOTER } from '@/style/zIndex'
import Link from 'next/link'

//
//
//

export default function Footer() {
  return (
    <footer
      className="w-full px-[2.5rem] py-[1.45rem] flex justify-between font-pp text-[1.2rem] tablet:text-[1.5rem]"
      style={{ position: 'relative', zIndex: FOOTER }}>
      <section className="flex flex-col tablet:flex-row gap-[1.4rem] tablet:gap-[2.5rem]">
        <div>
          <p>Instagram.</p>
          <p>
            <a
              href="https://www.instagram.com/likelion_sg/"
              target="_blank">
              @likelion_sg
            </a>
          </p>
        </div>
        <div>
          <p>Email.</p>
          <p>
            <a
              href="malito:likelion_sg@gmail.com"
              title="멋사 서강대로 메일 보내기">
              likelion_sg@gmail.com
            </a>
          </p>
        </div>
      </section>
      <section className="flex items-end">
        <div>
          <p className="text-right underline">
            <Link
              href={'/credit'}
              className="text-[2.6rem] tablet:text-[1.5rem]">
              ↖︎ Credits
            </Link>
          </p>
          <p>
            © Like<span className="italic">lion</span> Sogang. All Rights
            Reserved.
          </p>
        </div>
      </section>
    </footer>
  )
}
