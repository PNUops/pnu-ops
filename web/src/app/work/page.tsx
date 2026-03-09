import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
  const assetPrefix = process.env.NODE_ENV === "production" ? "/pnu-ops" : "";

  return (
    <main className="mt-20 space-y-12 md:mt-24 md:space-y-16 lg:space-y-20">
      {/* Hero */}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 md:flex-row md:items-center md:gap-12">
        <div className="flex-1 space-y-5">
          <p className="text-brand-default text-xs font-semibold tracking-[0.26em] uppercase">
            Work · OPUS
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
            <span className="font-sans wrap-break-word">
              부산대학교 SW프로젝트관리시스템
            </span>{" "}
            <span className="text-text-tertiary text-2xl md:text-3xl">
              (OPUS)
            </span>
          </h1>

          <div className="flex flex-wrap gap-3 text-xs font-medium">
            <Link
              href="http://opus.pusan.ac.kr/"
              target="_blank"
              className="bg-fill-brand text-text-inverse hover:bg-fill-brand-hover inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors"
            >
              서비스 바로가기
              <span className="text-[10px]">↗</span>
            </Link>
          </div>

          <p className="text-text-secondary text-base md:text-lg">
            부산대학교 SW프로젝트관리시스템(OPUS)은 부산대학교 프로그램에서
            사용하는 학생 프로젝트 관리·전시 플랫폼입니다. 공모전과 캡스톤
            프로젝트를 한 곳에서 등록·관리·공유할 수 있도록 설계되었습니다.
          </p>

          <p className="text-text-tertiary text-xs">
            * 내부 해커톤 및 캡스톤 결과물 등록에 실제 사용되었으며, 직접 해커톤
            결과물을 OPUS를 통해 제출하며 서비스 품질을 검증했습니다.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end">
          <div className="border-border-subtle bg-bg-elevated/90 relative w-full max-w-md overflow-hidden rounded-3xl border shadow-[0_18px_40px_rgba(15,23,42,0.16)]">
            <Image
              src={`${assetPrefix}/work/opus-cover.webp`}
              alt="부산대학교 SW프로젝트관리시스템(OPUS) 메인 화면"
              width={960}
              height={540}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="mx-auto w-full max-w-5xl space-y-6 px-4">
        <header className="space-y-2">
          <p className="text-text-tertiary text-xs font-semibold tracking-[0.2em] uppercase">
            Features
          </p>
          <h2 className="text-text-primary text-xl font-semibold md:text-2xl">
            <span className="font-sans">
              공모전부터 캡스톤까지 한 번에 관리하는 프로젝트 허브
            </span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base">
            OPUS는 여러 역할(관리자, 팀 리더, 참가자, 투표자)을 지원하며, 각
            주체가 필요한 업무를 한 화면에서 처리할 수 있도록 설계된
            시스템입니다.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="border-border-subtle bg-bg-subtle/80 flex flex-col gap-2 rounded-2xl border p-4 text-sm backdrop-blur-sm">
            <p className="text-text-tertiary text-[11px] font-semibold tracking-[0.18em] uppercase">
              관리자
            </p>
            <h3 className="text-text-primary text-sm font-semibold">
              프로그램·공모전 운영 대시보드
            </h3>
            <p className="text-text-secondary text-xs">
              공모전/캡스톤 프로그램 생성, 일정 관리, 프로젝트 등록 승인, 심사
              절차 설정 등을 웹에서 일괄 관리합니다.
            </p>
          </div>

          <div className="border-border-subtle bg-bg-subtle/80 flex flex-col gap-2 rounded-2xl border p-4 text-sm backdrop-blur-sm">
            <p className="text-text-tertiary text-[11px] font-semibold tracking-[0.18em] uppercase">
              팀 리더·참가자
            </p>
            <h3 className="text-text-primary text-sm font-semibold">
              팀 프로젝트 등록·수정·발표 자료 관리
            </h3>
            <p className="text-text-secondary text-xs">
              프로젝트 소개, 팀원, 산출물, 발표 자료를 한 번에 등록하고, 마감
              전까지 자유롭게 수정할 수 있습니다.
            </p>
          </div>

          <div className="border-border-subtle bg-bg-subtle/80 flex flex-col gap-2 rounded-2xl border p-4 text-sm backdrop-blur-sm">
            <p className="text-text-tertiary text-[11px] font-semibold tracking-[0.18em] uppercase">
              심사위원·투표자
            </p>
            <h3 className="text-text-primary text-sm font-semibold">
              작품 열람 및 평가 지원
            </h3>
            <p className="text-text-secondary text-xs">
              프로젝트 상세 페이지를 기준으로 점수 입력, 코멘트 작성, 인기상
              투표 등 다양한 평가 플로우를 지원하도록 설계되었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 도입 효과 및 사용 사례 */}
      <section className="mx-auto w-full max-w-5xl space-y-6 px-4 pb-16">
        <header className="space-y-2">
          <p className="text-text-tertiary text-xs font-semibold tracking-[0.2em] uppercase">
            Usage
          </p>
          <h2 className="text-text-primary text-xl font-semibold md:text-2xl">
            <span className="font-sans">
              실제 해커톤·캡스톤에서 검증된 운영 경험
            </span>
          </h2>
        </header>

        <div className="grid gap-4 md:grid-cols-[1.4fr,1fr]">
          <div className="border-border-subtle bg-bg-elevated/80 space-y-3 rounded-2xl border p-5 text-sm backdrop-blur-sm">
            <p className="text-text-secondary text-xs md:text-sm">
              OPUS는 부산대학교 내부 해커톤과 캡스톤 프로그램에 실제로 도입되어,
              공모전 공지부터 결과물 등록, 심사, 결과 공유까지의 전체 플로우를
              담당했습니다. 현재까지 220명 이상이 계정을 생성해 프로젝트를
              등록하거나 열람했습니다.
            </p>
            <p className="text-text-secondary text-xs md:text-sm">
              특히, 개발자는 본인의 해커톤 팀 프로젝트를 OPUS에 직접
              등록·제출함으로써, "실제 사용자"로서 서비스 품질과 플로우를
              검증했습니다. 이를 바탕으로 폼 UX, 프로젝트 리스트 화면, 정렬 및
              검색 기능 등을 지속적으로 개선했습니다.
            </p>
          </div>

          <div className="border-border-subtle bg-bg-subtle/80 flex flex-col justify-between gap-3 rounded-2xl border p-5 text-xs backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-text-tertiary font-semibold">Key Metrics</p>
              <p className="text-text-primary">· 220+ 등록 사용자</p>
              <p className="text-text-primary">
                · 다수의 해커톤·캡스톤 프로그램 적용
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-text-tertiary font-semibold">PNUops 역할</p>
              <p className="text-text-secondary">
                · 서비스 기획 및 전체 UX 플로우 정의
              </p>
              <p className="text-text-secondary">
                · 백엔드/프론트엔드 개발 및 배포 자동화 구성
              </p>
              <p className="text-text-secondary">
                · 실제 프로그램 운영 시 장애 대응 및 기능 개선
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
