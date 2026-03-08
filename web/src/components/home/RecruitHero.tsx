import Image from "next/image";
import Link from "next/link";

export default function RecruitHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-bg-default">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,91,170,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(148,163,179,0.18),_transparent_65%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 flex-col gap-8">
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full bg-brand-subtle/80 px-3 py-1 text-xs font-medium text-text-brand ring-1 ring-border-subtle/60 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-default" />
            2026 PNUops 신입 부원 모집
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              함께 만드는
              <br />
              PNU의 오픈 프로젝트 클럽
            </h1>
            <p className="max-w-xl text-base text-text-secondary sm:text-lg">
              프론트엔드, 백엔드, AI, 디자인, 기획까지. 학교 수업만으로는
              채워지지 않는 실전 경험을 PNUops에서 동료들과 함께 쌓아가요.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/opus"
              className="inline-flex items-center justify-center rounded-full bg-brand-default px-6 py-2.5 text-sm font-medium text-text-inverse shadow-sm transition hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-default"
            >
              최근 프로젝트 둘러보기
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-border-default bg-bg-elevated px-6 py-2.5 text-sm font-medium text-text-primary shadow-sm transition hover:border-border-strong hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-default"
            >
              동아리 자세히 보기
            </Link>
          </div>

          <p className="text-xs text-text-tertiary">
            * 모집 일정, 전형 절차 등 상세 안내는 곧 공개될 예정입니다.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end">
          <div className="relative w-full max-w-md rounded-3xl border border-border-subtle bg-bg-elevated/80 p-6 shadow-lg shadow-neutral-900/5 backdrop-blur">
            <div className="mb-6 flex items-center justify-center">
              <Image
                src="/pnuops-logo.png"
                alt="PNUops 로고"
                width={320}
                height={100}
                priority
              />
            </div>
            <div className="space-y-3 text-sm text-text-secondary">
              <p>
                로고 파일은 프로젝트의 <code>public/pnuops-logo.png</code>{" "}
                경로에 두고 사용할 수 있습니다.
              </p>
              <p>
                우리 동아리만의 색감과 타이포그래피에 맞춰 힙한 랜딩을 만들
                준비가 되어 있어요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
