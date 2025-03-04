"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Check, Download, ExternalLink, Loader2, RefreshCw, Search } from "lucide-react"
import { GameCard } from "@/components/game-card"
import { Particles } from "@/components/particles"

// 模拟从HEYTCM.com获取的游戏数据
const heytcmGames = [
  {
    id: "heytcm-1",
    title: "中医诊断模拟器",
    thumbnail: "/placeholder.svg?height=200&width=350",
    category: "模拟",
    tags: ["中医", "诊断", "教育"],
    source: "tcm",
    rating: 4.7,
    players: 5800,
    description: "模拟中医诊断过程，包括望闻问切四诊法，学习中医诊断技巧。",
  },
  {
    id: "heytcm-2",
    title: "本草知识问答",
    thumbnail: "/placeholder.svg?height=200&width=350",
    category: "益智",
    tags: ["中医", "问答", "药材"],
    source: "tcm",
    rating: 4.5,
    players: 8200,
    description: "测试你对中药材的了解，包含500多种常见中药材的知识问答。",
  },
  {
    id: "heytcm-3",
    title: "穴位定位训练",
    thumbnail: "/placeholder.svg?height=200&width=350",
    category: "教育",
    tags: ["中医", "穴位", "经络"],
    source: "tcm",
    rating: 4.6,
    players: 6300,
    description: "在3D人体模型上练习定位常用穴位，提高针灸定位准确性。",
  },
  {
    id: "heytcm-4",
    title: "中医方剂组合",
    thumbnail: "/placeholder.svg?height=200&width=350",
    category: "策略",
    tags: ["中医", "方剂", "配伍"],
    source: "tcm",
    rating: 4.4,
    players: 4900,
    description: "学习中医方剂组合原理，根据病症选择合适的药材组合。",
  },
  {
    id: "heytcm-5",
    title: "五行平衡器",
    thumbnail: "/placeholder.svg?height=200&width=350",
    category: "休闲",
    tags: ["中医", "五行", "平衡"],
    source: "tcm",
    rating: 4.3,
    players: 12500,
    description: "通过调整五行元素的比例，达到阴阳平衡，体验中医五行理论。",
  },
  {
    id: "heytcm-6",
    title: "中医药材识别",
    thumbnail: "/placeholder.svg?height=200&width=350",
    category: "教育",
    tags: ["中医", "识别", "药材"],
    source: "tcm",
    rating: 4.8,
    players: 7600,
    description: "通过图片识别各种中药材，学习它们的外观特征和功效。",
  },
]

export default function GameExtractorPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGames, setSelectedGames] = useState<string[]>([])
  const [importedGames, setImportedGames] = useState<typeof heytcmGames>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isImporting, setIsImporting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // 过滤游戏
  const filteredGames = heytcmGames.filter(
    (game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      game.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // 刷新游戏列表
  const refreshGames = () => {
    setIsLoading(true)
    // 模拟API调用延迟
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  // 选择/取消选择游戏
  const toggleGameSelection = (gameId: string) => {
    setSelectedGames((prev) => (prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId]))
  }

  // 导入选中的游戏
  const importSelectedGames = () => {
    setIsImporting(true)
    // 模拟API调用延迟
    setTimeout(() => {
      const newImportedGames = heytcmGames.filter((game) => selectedGames.includes(game.id))
      setImportedGames((prev) => [...prev, ...newImportedGames])
      setSelectedGames([])
      setIsImporting(false)
      setShowSuccess(true)

      // 3秒后隐藏成功消息
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }, 2000)
  }

  return (
    <div className="container py-8">
      <Particles type="all" count={30} />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">游戏提取工具</h1>
        <Button variant="outline" asChild>
          <a href="https://heytcm.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            访问HEYTCM.com
          </a>
        </Button>
      </div>

      <p className="text-muted-foreground mb-8">
        从HEYTCM.com网站提取游戏并整合到游戏导航站中。您可以浏览、筛选和导入游戏。
      </p>

      {showSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle>导入成功</AlertTitle>
          <AlertDescription>
            已成功导入{importedGames.length > 0 ? importedGames.slice(-selectedGames.length).length : 0}
            款游戏到游戏导航站。
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList>
          <TabsTrigger value="browse">浏览游戏</TabsTrigger>
          <TabsTrigger value="imported">已导入游戏</TabsTrigger>
          <TabsTrigger value="settings">设置</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="搜索游戏名称、标签或分类..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="游戏类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">所有类型</SelectItem>
                <SelectItem value="education">教育类</SelectItem>
                <SelectItem value="casual">休闲类</SelectItem>
                <SelectItem value="simulation">模拟类</SelectItem>
                <SelectItem value="strategy">策略类</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={refreshGames} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  刷新中
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  刷新
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <Card
                key={game.id}
                className={`cursor-pointer transition-all ${selectedGames.includes(game.id) ? "ring-2 ring-primary" : ""}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={game.thumbnail || "/placeholder.svg"}
                    alt={game.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                  <Badge className="absolute top-2 right-2 bg-wood text-white">中医自研</Badge>
                  {selectedGames.includes(game.id) && (
                    <div className="absolute top-2 left-2 bg-primary text-white rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{game.title}</CardTitle>
                  <CardDescription>{game.category}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">{game.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {game.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="text-yellow-500 mr-1">★</span> {game.rating.toFixed(1)}
                  </div>
                  <Button
                    variant={selectedGames.includes(game.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleGameSelection(game.id)}
                  >
                    {selectedGames.includes(game.id) ? "已选择" : "选择"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12 border rounded-lg">
              <p className="text-muted-foreground">没有找到符合条件的游戏</p>
            </div>
          )}

          <div className="flex items-center justify-between bg-muted p-4 rounded-lg">
            <div>
              已选择 <span className="font-bold">{selectedGames.length}</span> 款游戏
            </div>
            <Button onClick={importSelectedGames} disabled={selectedGames.length === 0 || isImporting}>
              {isImporting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  导入中...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  导入选中游戏
                </>
              )}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="imported" className="space-y-6">
          <h2 className="text-xl font-medium">已导入游戏</h2>

          {importedGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importedGames.map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  thumbnail={game.thumbnail}
                  category={game.category}
                  tags={game.tags}
                  source="tcm"
                  rating={game.rating}
                  players={game.players}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <p className="text-muted-foreground">尚未导入任何游戏</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => document.querySelector('[data-value="browse"]')?.click()}
              >
                浏览并导入游戏
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API设置</CardTitle>
              <CardDescription>配置HEYTCM.com API连接参数</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API密钥</Label>
                <Input id="api-key" type="password" value="••••••••••••••••" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-endpoint">API端点</Label>
                <Input id="api-endpoint" value="https://api.heytcm.com/v1/games" readOnly />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="auto-sync" />
                <Label htmlFor="auto-sync">启用自动同步（每24小时）</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存设置</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>导入设置</CardTitle>
              <CardDescription>配置游戏导入选项</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="import-metadata" defaultChecked />
                <Label htmlFor="import-metadata">导入游戏元数据（标签、分类、评分）</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="import-assets" defaultChecked />
                <Label htmlFor="import-assets">导入游戏资源（图片、图标）</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="import-descriptions" defaultChecked />
                <Label htmlFor="import-descriptions">导入游戏描述</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="override-existing" />
                <Label htmlFor="override-existing">覆盖已存在的游戏</Label>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <Label htmlFor="default-source">默认游戏来源</Label>
                <Select defaultValue="tcm">
                  <SelectTrigger id="default-source">
                    <SelectValue placeholder="选择默认来源" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tcm">中医自研</SelectItem>
                    <SelectItem value="h5">H5轻游戏</SelectItem>
                    <SelectItem value="opensource">开源共创</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存设置</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

