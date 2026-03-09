import Image from "next/image";
import Link from "next/link";

export default function RecruitHero() {
  return (
    <section className="bg-bg-default relative flex min-h-screen items-center justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,91,170,0.12),transparent_60%),radial-gradient(circle_at_bottom,rgba(148,163,179,0.18),transparent_65%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-8">
          <div className="bg-brand-subtle/80 text-text-brand ring-border-subtle/60 inline-flex max-w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 backdrop-blur">
            <span className="bg-brand-default h-1.5 w-1.5 rounded-full" />
            2026 PNUops 신입 부원 모집 예정
          </div>

          <div className="space-y-4">
            <h1 className="text-text-primary text-4xl font-semibold tracking-tight sm:text-5xl">
              부산대에서 "진짜 서비스"를
              <br />
              만들고 운영하는 개발 동아리
            </h1>
            <p className="text-text-secondary max-w-xl text-base sm:text-lg">
              프론트엔드·백엔드·인프라·디자인·기획까지. 수업을 넘어 실제
              서비스를 팀으로 만들어 보고 싶다면, PNUops에서 시작해 보세요.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/opus"
              className="bg-brand-default text-text-inverse hover:bg-brand-hover focus-visible:ring-border-focus focus-visible:ring-offset-bg-default inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium shadow-sm transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              최근 프로젝트 보러가기
            </Link>
            <Link
              href="/about"
              className="border-border-default bg-bg-elevated text-text-primary hover:border-border-strong hover:bg-bg-subtle focus-visible:ring-border-focus focus-visible:ring-offset-bg-default inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium shadow-sm transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              동아리 소개 더 보기
            </Link>
          </div>

          <p className="text-text-tertiary text-xs">
            * 모집 일정과 지원 방법은 곧 자세히 안내될 예정입니다.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end">
          <div className="border-border-subtle bg-bg-elevated/80 relative w-full max-w-md rounded-3xl border p-6 shadow-lg shadow-neutral-900/5 backdrop-blur">
            <div className="mb-6 flex items-center justify-center">
              <Image
                src="/pnuops-logo.png"
                alt="PNUops logo"
                width={320}
                height={100}
                priority
              />
            </div>
            <div className="text-text-secondary space-y-3 text-sm">
              <p>
                부산대학교 학부 재학생이라면 전공과 학년에 상관없이 지원할 수
                있습니다. 개발 경험이 많지 않아도 "함께 배우며 운영까지 가보고
                싶다"면 환영해요.
              </p>
              <p>
                모집 일정, 설명회, 과제 여부 등 자세한 정보는 PNUops 공식
                채널(Instagram, GitHub, Notion)을 통해 안내됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
