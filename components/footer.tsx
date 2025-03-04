import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">HEYTCM</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            中医游戏导航平台，汇聚H5轻游戏、中医自研游戏和第三方开源游戏
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">平台</h3>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
              关于我们
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              联系我们
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              隐私政策
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">资源</h3>
            <Link href="/workshop" className="text-sm text-muted-foreground hover:text-primary">
              开发者工坊
            </Link>
            <Link href="/api" className="text-sm text-muted-foreground hover:text-primary">
              API文档
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
              常见问题
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">社区</h3>
            <Link href="https://github.com" className="text-sm text-muted-foreground hover:text-primary">
              GitHub
            </Link>
            <Link href="https://discord.com" className="text-sm text-muted-foreground hover:text-primary">
              Discord
            </Link>
            <Link href="https://twitter.com" className="text-sm text-muted-foreground hover:text-primary">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} HEYTCM. 保留所有权利。
      </div>
    </footer>
  )
}

