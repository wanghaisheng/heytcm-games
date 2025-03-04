"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Particles } from "@/components/particles"
import { CategoryFilter } from "@/components/category-filter"
import { GameCard } from "@/components/game-card"
import { mockGames } from "@/lib/utils"

export default function CategoriesPage() {
  const [filters, setFilters] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  // Filter games based on search query and filters
  const filteredGames = mockGames.filter((game) => {
    // Search filter
    if (searchQuery && !game.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }

    // Category filters
    if (filters.length > 0) {
      if (filters.includes("h5") && game.source === "h5") return true
      if (filters.includes("tcm") && game.source === "tcm") return true
      if (filters.includes("opensource") && game.source === "opensource") return true

      // Check if any tag matches the filters
      return game.tags.some((tag) => filters.some((filter) => tag.toLowerCase().includes(filter.toLowerCase())))
    }

    return true
  })

  return (
    <div className="container py-8">
      <Particles type="all" count={30} />

      <h1 className="text-3xl font-bold mb-6">游戏分类</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="sticky top-24">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="搜索分类或游戏..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <CategoryFilter onFilterChange={setFilters} />
          </div>
        </div>

        <div className="md:w-3/4">
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">全部</TabsTrigger>
              <TabsTrigger value="style">风格</TabsTrigger>
              <TabsTrigger value="type">类型</TabsTrigger>
              <TabsTrigger value="theme">主题</TabsTrigger>
              <TabsTrigger value="function">功能</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div>
                <h2 className="text-xl font-medium mb-4">推荐分类</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {["中医", "国风", "策略", "角色扮演", "休闲", "卡牌", "模拟", "益智"].map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2"
                      onClick={() => setFilters((prev) => [...prev, category.toLowerCase()])}
                    >
                      <span className="text-lg">{category}</span>
                      <span className="text-sm text-muted-foreground">
                        {Math.floor(Math.random() * 1000) + 100} 款游戏
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium mb-4">游戏列表</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGames.map((game) => (
                    <GameCard key={game.id} {...game} />
                  ))}
                </div>

                {filteredGames.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium">没有找到符合条件的游戏</h3>
                    <p className="text-muted-foreground mt-2">请尝试调整筛选条件</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="style">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {["国风", "欧美", "二次元", "日韩", "Q版卡通", "科幻", "军事", "水墨风", "像素", "卡通"].map(
                  (category) => (
                    <Button
                      key={category}
                      variant="outline"
                      className="h-auto py-6 flex flex-col gap-2"
                      onClick={() => setFilters((prev) => [...prev, category.toLowerCase()])}
                    >
                      <span className="text-lg">{category}</span>
                      <span className="text-sm text-muted-foreground">
                        {Math.floor(Math.random() * 1000) + 100} 款游戏
                      </span>
                    </Button>
                  ),
                )}
              </div>
            </TabsContent>

            <TabsContent value="type">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "射击游戏",
                  "动作游戏",
                  "角色扮演",
                  "冒险游戏",
                  "竞速游戏",
                  "策略游戏",
                  "格斗游戏",
                  "即时战略",
                  "体育游戏",
                  "桌游棋牌",
                  "模拟经营",
                  "音乐游戏",
                ].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="h-auto py-6 flex flex-col gap-2"
                    onClick={() => setFilters((prev) => [...prev, category.toLowerCase()])}
                  >
                    <span className="text-lg">{category}</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.floor(Math.random() * 1000) + 100} 款游戏
                    </span>
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="theme">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "武侠",
                  "仙侠",
                  "三国",
                  "西游",
                  "宫廷",
                  "动漫ACG",
                  "魔幻",
                  "科幻未来",
                  "奇幻/幻想",
                  "中世纪",
                  "现代",
                  "末日废土",
                ].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="h-auto py-6 flex flex-col gap-2"
                    onClick={() => setFilters((prev) => [...prev, category.toLowerCase()])}
                  >
                    <span className="text-lg">{category}</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.floor(Math.random() * 1000) + 100} 款游戏
                    </span>
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="function">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "登录界面",
                  "创建角色",
                  "服务器选择",
                  "游戏公告",
                  "过场动画",
                  "新手引导",
                  "主界面",
                  "Loading",
                  "战斗界面",
                  "战斗提示",
                ].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="h-auto py-6 flex flex-col gap-2"
                    onClick={() => setFilters((prev) => [...prev, category.toLowerCase()])}
                  >
                    <span className="text-lg">{category}</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.floor(Math.random() * 1000) + 100} 款游戏
                    </span>
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

