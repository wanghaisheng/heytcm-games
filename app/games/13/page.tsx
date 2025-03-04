import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Users, Clock, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

export default function HerbMatchGamePage() {
  const game = {
    id: "13",
    title: "草药消消乐",
    thumbnail: "/placeholder.svg?height=200&width=350",
    category: "休闲",
    tags: ["三消", "中医", "药材", "益智"],
    source: "tcm",
    rating: 4.6,
    players: 28600,
  }

  // 游戏中的中药材
  const herbs = [
    { name: "人参", effect: "补气", color: "bg-amber-500" },
    { name: "灵芝", effect: "益气安神", color: "bg-red-700" },
    { name: "枸杞", effect: "滋补肝肾", color: "bg-red-500" },
    { name: "当归", effect: "补血活血", color: "bg-purple-700" },
    { name: "黄芪", effect: "补气固表", color: "bg-yellow-600" },
    { name: "甘草", effect: "调和诸药", color: "bg-amber-600" },
    { name: "川芎", effect: "活血行气", color: "bg-green-800" },
    { name: "白芍", effect: "养血柔肝", color: "bg-pink-200" },
  ]

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
                  <Badge className="bg-wood text-white">中医自研</Badge>
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
                <span>平均游戏时长: 8分钟</span>
              </div>
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
                  《草药消消乐》是一款融合中医药材知识与休闲三消玩法的益智游戏。游戏中每个方块都代表一种中药材，玩家通过连接相同的药材获得分数，同时学习中药材的功效与应用。游戏设计了多种关卡和玩法，让玩家在轻松休闲的氛围中了解中医药文化。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">游戏特色</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>精美的中药材图标，每种药材都有详细介绍</li>
                  <li>创新的五行相生相克机制，增加游戏策略性</li>
                  <li>多种游戏模式：经典模式、时间挑战、药方收集</li>
                  <li>边玩边学，寓教于乐的中医知识普及</li>
                  <li>随机生成的药方任务，增加游戏挑战性</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">游戏截图</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg?height=200&width=350" alt="游戏截图1" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg?height=200&width=350" alt="游戏截图2" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">五行契合度</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>金</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>木</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>水</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>火</span>
                      <span>50%</span>
                    </div>
                    <Progress value={50} className="h-2" />
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
                  《草药消消乐》巧妙地将中医药材知识融入游戏机制中，以下是主要的中医元素：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">药材五行属性</h4>
                    <p className="text-sm text-muted-foreground">
                      游戏中的每种药材都有对应的五行属性，遵循"金克木，木克土，土克水，水克火，火克金"的相克关系，以及相生关系，影响消除效果和得分。
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">药方组合系统</h4>
                    <p className="text-sm text-muted-foreground">
                      游戏中设计了多种真实的中药方剂，玩家需要在限定时间或步数内收集特定组合的药材，模拟中医配方的过程。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">药材图鉴</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {herbs.map((herb, index) => (
                    <div key={index} className="border rounded-lg p-3 text-center">
                      <div
                        className={`w-12 h-12 rounded-full ${herb.color} mx-auto mb-2 flex items-center justify-center text-white font-bold`}
                      >
                        {herb.name.substring(0, 1)}
                      </div>
                      <h4 className="font-medium text-sm">{herb.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{herb.effect}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  游戏内包含30余种常见中药材，每种药材都有详细的功效介绍
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">游戏机制</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">五行相生相克</h4>
                    <p className="text-sm text-muted-foreground">
                      消除相生关系的药材（如金生水）可获得连击加成；消除相克关系的药材（如金克木）可获得额外分数。
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">药方任务</h4>
                    <p className="text-sm text-muted-foreground">
                      每个关卡都有特定的药方任务，需要玩家收集指定数量的特定药材，模拟中医配方的过程。
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">季节变化</h4>
                    <p className="text-sm text-muted-foreground">
                      游戏中的季节会影响药材的生长和效果，春生、夏长、秋收、冬藏的规律影响游戏策略。
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="developer" className="mt-4 space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">中医素材库</h3>
                <div className="border rounded-lg p-4">
                  <p className="text-muted-foreground mb-4">
                    《草药消消乐》开放部分中药素材供开发者使用，包括药材图标、效果描述等。
                  </p>
                  <Button>浏览素材库</Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">开发者信息</h3>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-wood flex items-center justify-center text-white">
                      <span className="font-medium">药</span>
                    </div>
                    <div>
                      <h4 className="font-medium">HEYTCM药草工作室</h4>
                      <p className="text-sm text-muted-foreground">专注中医休闲游戏开发</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    查看更多作品
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">教育价值</h3>
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    《草药消消乐》已被多家中医药院校用作教学辅助工具，帮助学生记忆常用中药材的特性和功效。游戏内的药材知识均经过专业中医师审核。
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline">教育合作</Button>
                    <Button>下载教学资料</Button>
                  </div>
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

                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    下载安卓版
                  </Button>
                  <Button variant="outline" className="w-full">
                    下载iOS版
                  </Button>
                </div>
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
                <h3 className="font-medium">游戏玩法</h3>
              </div>
              <div className="p-4 space-y-4">
                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">经典模式</h4>
                    <p className="text-xs text-muted-foreground">连接三个或更多相同的药材，获取分数并完成药方任务。</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">时间挑战</h4>
                    <p className="text-xs text-muted-foreground">在限定时间内获取尽可能高的分数，测试你的反应速度。</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">药方收集</h4>
                    <p className="text-xs text-muted-foreground">
                      根据给定的药方，收集特定数量的药材，模拟中医配方过程。
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">五行挑战</h4>
                    <p className="text-xs text-muted-foreground">
                      利用五行相生相克原理，策略性地消除药材获得更高分数。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

