import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, BarChart, Settings, Code, Database, FileText } from "lucide-react"
import { Particles } from "@/components/particles"

export default function ToolsPage() {
  const tools = [
    {
      id: "game-extractor",
      title: "游戏提取工具",
      description: "从HEYTCM.com网站提取游戏并整合到游戏导航站中",
      icon: <Download className="h-8 w-8 text-wood" />,
      href: "/tools/game-extractor",
    },
    {
      id: "analytics",
      title: "数据分析工具",
      description: "分析游戏数据、用户行为和能量流动",
      icon: <BarChart className="h-8 w-8 text-water" />,
      href: "/tools/analytics",
    },
    {
      id: "api-manager",
      title: "API管理器",
      description: "管理和配置与外部系统的API连接",
      icon: <Code className="h-8 w-8 text-fire" />,
      href: "/tools/api-manager",
    },
    {
      id: "game-editor",
      title: "游戏编辑器",
      description: "编辑游戏信息、标签和分类",
      icon: <FileText className="h-8 w-8 text-metal" />,
      href: "/tools/game-editor",
    },
    {
      id: "database-manager",
      title: "数据库管理器",
      description: "管理游戏数据库和备份",
      icon: <Database className="h-8 w-8 text-earth" />,
      href: "/tools/database-manager",
    },
    {
      id: "system-settings",
      title: "系统设置",
      description: "配置系统参数和全局设置",
      icon: <Settings className="h-8 w-8 text-primary" />,
      href: "/tools/system-settings",
    },
  ]

  return (
    <div className="container py-8">
      <Particles type="all" count={30} />

      <h1 className="text-3xl font-bold mb-2">管理工具</h1>
      <p className="text-muted-foreground mb-8">这些工具可以帮助您管理游戏导航站，提取游戏，分析数据，以及配置系统。</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card key={tool.id} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-4">
                {tool.icon}
                <CardTitle>{tool.title}</CardTitle>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={tool.href}>访问工具</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

