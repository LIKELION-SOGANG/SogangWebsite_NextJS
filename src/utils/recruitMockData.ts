const formatDate = (date: Date) => {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const dayOfWeek = week[date.getDay()]
  return `${date.toLocaleDateString()} (${dayOfWeek})`
}

export interface ScheduleObj {
  name: string
  date: string
}

export interface AreaObj {
  name: string
  description: string
  linkToSkill: string
}
export interface FAQObj {
  Q: string
  A: string
}

export const scheduleObj: ScheduleObj[] = [
  {
    name: '서류 접수',
    date: `${formatDate(new Date())} ~ \n ${formatDate(new Date())}`
  },
  {
    name: '서류 결과 발표',
    date: `${formatDate(new Date())} ~ \n ${formatDate(new Date())}`
  },
  {
    name: '대면 면접',
    date: `${formatDate(new Date())} ~ \n ${formatDate(new Date())}`
  },
  {
    name: '최종 발표',
    date: `${formatDate(new Date())} ~ \n ${formatDate(new Date())}`
  }
]

export const areaObj: AreaObj[] = [
  {
    name: 'Front-End',
    description: '사용자와 상호작용하는 인터페이스를 시각화하여 구현합니다.',
    linkToSkill: 'https://www.instagram.com/p/C3fFLXIP6pE/?img_index=4'
  },
  {
    name: 'Back-End',
    description: '데이터 처리, 비즈니스 로직, 서버 관리 등을 담당합니다.',
    linkToSkill: 'https://www.instagram.com/p/C3fFLXIP6pE/?img_index=5'
  }
]

export const FAQObj: FAQObj[] = [
  {
    Q: '전공자만 지원할 수 있나요?',
    A: '주 2회 교육 세션과 해커톤, 데모데이 등 필수 행사에 참가가 가능한 서강대학교 학생이라면 나이와 학기, 전공에 상관 없이 자유롭게 지원 가능합니다.'
  },
  {
    Q: '교육 세션은 언제 어디서 진행되나요?',
    A: '1학기 중 매주 화요일과 금요일 오후 7시, 서강대학교 내 강의실에서 약 2시간 진행됩니다.\n 교육 세션은 필수 행사이기 때문에 반드시 참여하셔야 합니다.'
  },
  {
    Q: '어떤 것을 배우나요?',
    A: '아기 사자는 웹 프로그래밍을 공부하고 자신의 아이디어를 담은 웹사이트를 직접 제작하고 배포합니다.\n 자세한 사항은 홈페이지 About 탭을 참고해주세요.'
  },
  {
    Q: '프로그래밍과 개발을 잘 모르는데 괜찮나요?',
    A: '프로그래밍과 개발을 배우겠다는 의미와 열정만 있다면 괜찮습니다.\n 멋쟁이사자처럼 서강대학교의 커리큘럼은 프로그래밍 기초부터 구성되어 있습니다.'
  },
  {
    Q: '면접은 어떤 방식으로 진행되나요?',
    A: '서강대학교 내 강의실에서 대면 면접으로 진행됩니다.\n 면접 시간은 서류에 적어주신 면접 가능 시간을 토대로 배정됩니다.'
  },
  {
    Q: '개인 노트북이 꼭 있어야 하나요?',
    A: '교육 세션이 개인 노트북으로 실습하면서 진행되기 때문에, 개인 노트북이 없으면 참여 불가능합니다.'
  },
  {
    Q: '1년 내내 참가해야 하나요?',
    A: '교육 세션, 데모데이 등 필수 행사가 1년에 걸쳐 있기 때문에 1년 동안 참여 가능해야 지원하실 수 있습니다.\n 다만, 시험 기간에는 세션이 진행되지 않으니 참고해주세요.'
  },
  {
    Q: '모바일로도 서류 지원이 가능한가요?',
    A: '모바일은 지원하고 있지 않습니다.'
  }
]

export const questions = [
  {
    prompt:
      '간단한 자기소개와 함께, 다양한 IT 동아리 중에서 멋쟁이사자처럼 서강대학교 12기를 선택하고 지원하시게 된 이유를 작성해주세요. ',
    limit: 500
  },
  {
    prompt:
      '파트를 선택한 이유와 관련 경험을 해본 경험이 있는지 작성해주세요. 그리고 멋쟁이사자처럼에서 이 파트로 활동하면서 어떠한 성장을 희망하는지 작성해주세요.',
    limit: 500
  },
  {
    prompt:
      '멋쟁이사자처럼 서강대학교는 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 지원자 본인이 협업과 팀워크를 진행해보았던 경험과, 그 경험을 멋쟁이사자처럼 서강대학교에서 어떻게 적용시킬 수 있을지 작성해주세요. ',
    limit: 500
  },
  {
    prompt: '실현하고 싶은 자신만의 IT 서비스 아이디어에 대해 설명해주세요.',
    limit: 500
  }
]

export const meeting = [
  {
    interviewDate: `${formatDate(new Date())}`,
    times: [18, 19, 20]
  },
  {
    interviewDate: `${formatDate(new Date())}`,
    times: [18, 19, 20]
  },
  {
    interviewDate: `${formatDate(new Date())}`,
    times: [18, 19, 20]
  }
]

export const personalInformation = [
  { name: 'name', title: '이름', placeholder: '지원자의 이름을 입력해주세요.' },
  {
    name: 'studentNumber',
    title: '학번',
    placeholder: '서강대학교 학번을 입력해주세요 .ex) 20220001'
  },
  {
    name: 'email',
    title: '이메일',
    placeholder: '이메일 주소를 입력해주세요. ex) likelionsg@gmail.com'
  }
]

export const personalPhoneNumber = {
  name: 'phoneNumber',
  title: '전화번호',
  placeholder: '연락가능한 전화번호를 입력해주세요. ex) 010-1234-5678'
}
