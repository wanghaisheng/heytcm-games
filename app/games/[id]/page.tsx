import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Star, Users, Clock, Download, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { mockGames } from "@/lib/utils"

interface GamePageProps {
  params: {
    id: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const game = mockGames.find((g) => g.id === params.id)

  if (!game) {
    notFound()
  }

  const sourceLabel = {
    h5: "H5轻游戏",
    tcm: "中医自研",
    opensource: "开源共创",
  }

  const sourceColor = {
    h5: "bg-water text-white",
    tcm: "bg-wood text-white",
    opensource: "bg-metal text-black",
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/games" className="flex items-center text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4 mr-1" />
          返回游戏库
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src={game.thumbnail || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{game.title}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className={sourceColor[game.source]}>{sourceLabel[game.source]}</Badge>
                  <Badge variant="outline">{game.category}</Badge>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button>开始游戏</Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-medium">{game.rating.toFixed(1)}</span>
              </div>

              <div className="flex items-center gap-1">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span>{game.players.toLocaleString()} 人在玩</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>平均游戏时长: 15分钟</span>
              </div>

              {game.source === "h5" && (
                <div className="flex items-center gap-1">
                  <Download className="h-5 w-5 text-muted-foreground" />
                  <span>大小: 5MB</span>
                </div>
              )}
            </div>
          </div>

          <Tabs defaultValue="surface" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="surface">表层信息</TabsTrigger>
              <TabsTrigger value="deep">深度解析</TabsTrigger>
              <TabsTrigger value="developer">开发者生态</TabsTrigger>
            </TabsList>

            <TabsContent value="surface" className="mt-4 space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">游戏介绍</h3>
                <p className="text-muted-foreground">
                  {game.title}是一款融合中医文化与现代游戏玩法的{game.category}
                  游戏。玩家将在游戏中探索中医药理论，体验五行相生相克的奥妙，同时享受精心设计的游戏机制带来的乐趣。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">游戏特色</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>融合中医五行理论的独特玩法</li>
                  <li>精美的{game.tags.includes("国风") ? "国风" : ""}画面与音效</li>
                  <li>丰富的游戏内容与收集要素</li>
                  <li>寓教于乐，了解中医知识</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">五行契合度</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>金</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>木</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>水</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>火</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>土</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="deep" className="mt-4 space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">中医元素拆解</h3>
                <p className="text-muted-foreground mb-4">
                  {game.title}巧妙地将中医理论融入游戏机制中，以下是主要的中医元素：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">五行相生相克</h4>
                    <p className="text-sm text-muted-foreground">
                      游戏中的五行系统遵循"金克木，木克土，土克水，水克火，火克金"的相克关系，以及"金生水，水生木，木生火，火生土，土生金"的相生关系。
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">经络穴位系统</h4>
                    <p className="text-sm text-muted-foreground">
                      游戏中的技能树基于人体十二经络设计，解锁不同穴位可获得不同能力加成。
                    </p>
                  </div>
                </div>
              </div>

              {game.source === "opensource" && (
                <div>
                  <h3 className="text-xl font-medium mb-3">开源协议声明</h3>
                  <div className="border rounded-lg p-4">
                    <Badge variant="outline" className="mb-2">
                      MIT协议
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      本游戏基于MIT开源协议，允许任何人在遵循协议的前提下使用、修改和分发。原始版权归属于原作者，HEYTCM仅进行中医元素的改编与优化。
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="developer" className="mt-4 space-y-6">
              {game.source === "opensource" && (
                <div>
                  <h3 className="text-xl font-medium mb-3">MOD工坊</h3>
                  <div className="border rounded-lg p-4">
                    <p className="text-muted-foreground mb-4">为{game.title}创建自己的MOD，或下载其他玩家制作的MOD。</p>
                    <div className="flex gap-4">
                      <Button variant="outline">浏览MOD</Button>
                      <Button>上传MOD</Button>
                    </div>
                  </div>
                </div>
              )}

              {game.source === "tcm" && (
                <div>
                  <h3 className="text-xl font-medium mb-3">中医素材库</h3>
                  <div className="border rounded-lg p-4">
                    <p className="text-muted-foreground mb-4">
                      {game.title}开放部分中医素材供开发者使用，包括药材图鉴、经络图谱等。
                    </p>
                    <Button>浏览素材库</Button>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xl font-medium mb-3">开发者信息</h3>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <span className="font-medium">开发</span>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {game.source === "tcm" ? "HEYTCM工作室" : game.source === "h5" ? "轻游互动" : "开源社区"}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {game.source === "tcm"
                          ? "专注中医游戏开发"
                          : game.source === "h5"
                            ? "H5游戏开发专家"
                            : "开源游戏改编"}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    查看更多作品
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="font-medium">开始游戏</h3>
              </div>
              <div className="p-4 space-y-4">
                <Button className="w-full">立即开始</Button>

                {game.source === "h5" && (
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">无需下载，即点即玩</p>
                  </div>
                )}

                {game.source === "tcm" && (
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      下载安卓版
                    </Button>
                    <Button variant="outline" className="w-full">
                      下载iOS版
                    </Button>
                  </div>
                )}

                {game.source === "opensource" && (
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      下载PC版
                    </Button>
                    <Button variant="outline" className="w-full">
                      查看源代码
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="font-medium">标签</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4">
                <h3 className="font-medium">相关游戏</h3>
              </div>
              <div className="p-4 space-y-4">
                {mockGames
                  .filter((g) => g.id !== game.id && g.source === game.source)
                  .slice(0, 3)
                  .map((relatedGame) => (
                    <Link key={relatedGame.id} href={`/games/${relatedGame.id}`} className="flex gap-3 group">
                      <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedGame.thumbnail || "/placeholder.svg"}
                          alt={relatedGame.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">{relatedGame.title}</h4>
                        <p className="text-sm text-muted-foreground">{relatedGame.category}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

