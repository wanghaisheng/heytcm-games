import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Users, Clock, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

export default function WuXingPetGamePage() {
  const game = {
    id: "14",
    title: "五行宠物",
    thumbnail: "/placeholder.svg?height=200&width=350",
    category: "休闲",
    tags: ["养成", "五行", "性格测试"],
    source: "tcm",
    rating: 4.5,
    players: 18200,
  }

  // 五行神兽
  const pets = [
    { name: "青龙", element: "木", trait: "仁爱", color: "bg-wood" },
    { name: "朱雀", element: "火", trait: "礼仪", color: "bg-fire" },
    { name: "白虎", element: "金", trait: "义勇", color: "bg-metal" },
    { name: "玄武", element: "水", trait: "智慧", color: "bg-water" },
    { name: "黄麟", element: "土", trait: "诚信", color: "bg-earth" },
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
                <Button asChild>
                  <a href="https://wuxingpet.heytcm.com/" target="_blank" rel="noreferrer">
                    开始游戏
                  </a>
                </Button>
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
                <span>平均游戏时长: 10分钟</span>
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
                  《五行宠物》是一款基于中医五行理论的性格测试游戏，通过专业测试，为用户匹配独特的神兽宠物，探索内在性格特征。游戏将中医五行与性格心理学相结合，通过有趣的互动方式帮助用户了解自己的性格特点和潜能。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">游戏特色</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>基于中医五行理论的专业性格测试</li>
                  <li>五种独特神兽宠物，对应五行属性</li>
                  <li>详细的性格分析和洞察报告</li>
                  <li>社交分享功能，与朋友比较性格特点</li>
                  <li>个性化成长建议，帮助平衡五行能量</li>
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
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
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
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>火</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>土</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="deep" className="mt-4 space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">中医元素拆解</h3>
                <p className="text-muted-foreground mb-4">
                  《五行宠物》深入融合了中医五行理论与现代心理学，以下是主要的中医元素：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">五行性格理论</h4>
                    <p className="text-sm text-muted-foreground">
                      游戏基于中医五行理论，将人的性格特质分为金、木、水、火、土五种类型，每种类型对应不同的性格特点和行为模式。
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">阴阳平衡</h4>
                    <p className="text-sm text-muted-foreground">
                      测试结果不仅显示主导元素，还分析五行之间的平衡状态，提供个性化建议帮助用户达到阴阳平衡的理想状态。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">神兽图鉴</h3>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                  {pets.map((pet, index) => (
                    <div key={index} className="border rounded-lg p-3 text-center">
                      <div
                        className={`w-16 h-16 rounded-full ${pet.color} mx-auto mb-2 flex items-center justify-center text-white font-bold`}
                      >
                        {pet.name.substring(0, 1)}
                      </div>
                      <h4 className="font-medium text-sm">{pet.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {pet.element}行 - {pet.trait}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  每种神兽代表一种五行属性和性格特质，与用户的内在性格相匹配
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">测试机制</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">多维度性格评估</h4>
                    <p className="text-sm text-muted-foreground">
                      测试包含30个精心设计的问题，从情绪反应、思维方式、行为模式等多个维度评估用户的五行属性。
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">五行能量计算</h4>
                    <p className="text-sm text-muted-foreground">
                      基于用户的回答，系统计算五种元素的能量分布，生成个性化的五行图谱。
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">神兽匹配算法</h4>
                    <p className="text-sm text-muted-foreground">
                      根据五行能量分布，匹配最适合用户的神兽宠物，反映用户的主导性格特质。
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="developer" className="mt-4 space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">心理学基础</h3>
                <div className="border rounded-lg p-4">
                  <p className="text-muted-foreground mb-4">
                    《五行宠物》的测试体系结合了中医五行理论与现代心理学的OCEAN大五人格模型，提供科学且有趣的性格分析。
                  </p>
                  <Button>查看研究基础</Button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3">开发者信息</h3>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-water flex items-center justify-center text-white">
                      <span className="font-medium">心</span>
                    </div>
                    <div>
                      <h4 className="font-medium">HEYTCM心理工作室</h4>
                      <p className="text-sm text-muted-foreground">专注中医心理健康应用开发</p>
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
                    《五行宠物》被多家心理咨询机构用作辅助工具，帮助来访者更好地了解自己的性格特点和潜能。游戏内的五行理论解析经过专业中医师和心理学家共同审核。
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline">专业合作</Button>
                    <Button>下载研究报告</Button>
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
                <Button className="w-full" asChild>
                  <a href="https://wuxingpet.heytcm.com/" target="_blank" rel="noreferrer">
                    立即开始
                  </a>
                </Button>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    分享给朋友
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
                <h3 className="font-medium">游戏流程</h3>
              </div>
              <div className="p-4 space-y-4">
                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">1. 回答问题</h4>
                    <p className="text-xs text-muted-foreground">完成30个精心设计的问题，探索你的内在性格特质。</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">2. 获得神兽</h4>
                    <p className="text-xs text-muted-foreground">基于你的回答，系统会匹配最适合你的五行神兽。</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">3. 查看分析</h4>
                    <p className="text-xs text-muted-foreground">获取详细的性格分析报告，了解你的优势和潜能。</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm mb-1">4. 分享结果</h4>
                    <p className="text-xs text-muted-foreground">与朋友分享你的神兽和性格特点，比较彼此的差异。</p>
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

