import ApplySection from './container/ApplySection'
import PCOnly from './container/PCOnly'

//
//
//

export default function ApplyPage() {
  return (
    <main>
      <div className="desktop:hidden">
        <PCOnly />
      </div>
      <div className="max-desktop:hidden overflow-x-hidden">
        <ApplySection />
      </div>
    </main>
  )
}
