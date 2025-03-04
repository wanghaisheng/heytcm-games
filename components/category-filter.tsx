"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CategoryFilterProps {
  onFilterChange: (filters: any) => void
}

export function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const handleFilterToggle = (filter: string) => {
    setActiveFilters((prev) => {
      const newFilters = prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]

      onFilterChange(newFilters)
      return newFilters
    })
  }

  const styleCategories = [
    { id: "guofeng", name: "国风", count: 305006 },
    { id: "western", name: "欧美", count: 238751 },
    { id: "anime", name: "二次元", count: 305925 },
    { id: "japanese", name: "日韩", count: 105021 },
    { id: "qstyle", name: "Q版卡通", count: 404174 },
    { id: "scifi", name: "科幻", count: 45170 },
    { id: "military", name: "军事", count: 28596 },
  ]

  const typeCategories = [
    { id: "shooting", name: "射击游戏", count: 562 },
    { id: "action", name: "动作游戏", count: 544 },
    { id: "rpg", name: "角色扮演", count: 2476 },
    { id: "adventure", name: "冒险游戏", count: 892 },
    { id: "racing", name: "竞速游戏", count: 165 },
    { id: "strategy", name: "策略游戏", count: 1260 },
    { id: "fighting", name: "格斗游戏", count: 100 },
    { id: "rts", name: "即时战略", count: 218 },
    { id: "sports", name: "体育游戏", count: 93 },
    { id: "board", name: "桌游棋牌", count: 204 },
    { id: "simulation", name: "模拟经营", count: 1001 },
    { id: "music", name: "音乐游戏", count: 89 },
    { id: "dating", name: "恋爱养成", count: 155 },
    { id: "card", name: "卡牌", count: 1054 },
    { id: "moba", name: "MOBA", count: 120 },
    { id: "puzzle", name: "消除游戏", count: 416 },
    { id: "tower", name: "塔防", count: 248 },
    { id: "mmorpg", name: "MMORPG", count: 294 },
  ]

  const sourceCategories = [
    { id: "h5", name: "H5轻游戏", count: 3500 },
    { id: "tcm", name: "中医自研", count: 120 },
    { id: "opensource", name: "开源共创", count: 450 },
  ]

  const platformCategories = [
    { id: "mobile", name: "手游", count: 4200 },
    { id: "ios", name: "iOS", count: 3800 },
    { id: "android", name: "安卓", count: 4100 },
    { id: "wechat", name: "微信小程序", count: 1200 },
    { id: "douyin", name: "抖音小程序", count: 800 },
    { id: "alipay", name: "支付宝小程序", count: 600 },
    { id: "pc", name: "PC", count: 1500 },
    { id: "console", name: "主机", count: 300 },
    { id: "handheld", name: "掌机", count: 150 },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="real" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="real">实镜模式</TabsTrigger>
            <TabsTrigger value="virtual">虚镜模式</TabsTrigger>
          </TabsList>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  实镜模式提供传统标签墙，适合快速筛选。
                  <br />
                  虚镜模式提供3D标签空间站，适合探索发现。
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <TabsContent value="real" className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">来源</h3>
            <div className="flex flex-wrap gap-2">
              {sourceCategories.map((category) => (
                <Badge
                  key={category.id}
                  variant={activeFilters.includes(category.id) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleFilterToggle(category.id)}
                >
                  {category.name} ({category.count.toLocaleString()})
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">风格</h3>
            <ScrollArea className="h-[120px]">
              <div className="flex flex-wrap gap-2">
                {styleCategories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={activeFilters.includes(category.id) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleFilterToggle(category.id)}
                  >
                    {category.name} ({category.count.toLocaleString()})
                  </Badge>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div>
            <h3 className="font-medium mb-3">类型</h3>
            <ScrollArea className="h-[200px]">
              <div className="flex flex-wrap gap-2">
                {typeCategories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={activeFilters.includes(category.id) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleFilterToggle(category.id)}
                  >
                    {category.name} ({category.count.toLocaleString()})
                  </Badge>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div>
            <h3 className="font-medium mb-3">平台</h3>
            <div className="flex flex-wrap gap-2">
              {platformCategories.map((category) => (
                <Badge
                  key={category.id}
                  variant={activeFilters.includes(category.id) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleFilterToggle(category.id)}
                >
                  {category.name} ({category.count.toLocaleString()})
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">版式</h3>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="horizontal" />
                <Label htmlFor="horizontal">横屏</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="vertical" />
                <Label htmlFor="vertical">竖屏</Label>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="virtual">
          <div className="virtual-mirror">
            <div className="tag-sphere">
              {/* This would be implemented with Three.js in a real application */}
              <div
                className="tag-item"
                style={{ left: "50%", top: "30%", transform: "translate(-50%, -50%) translateZ(100px)" }}
              >
                国风
              </div>
              <div
                className="tag-item"
                style={{ left: "30%", top: "40%", transform: "translate(-50%, -50%) translateZ(-50px)" }}
              >
                策略
              </div>
              <div
                className="tag-item"
                style={{ left: "70%", top: "50%", transform: "translate(-50%, -50%) translateZ(20px)" }}
              >
                卡牌
              </div>
              <div
                className="tag-item"
                style={{ left: "40%", top: "60%", transform: "translate(-50%, -50%) translateZ(-80px)" }}
              >
                休闲
              </div>
              <div
                className="tag-item"
                style={{ left: "60%", top: "20%", transform: "translate(-50%, -50%) translateZ(60px)" }}
              >
                动作
              </div>
              <div
                className="tag-item"
                style={{ left: "20%", top: "70%", transform: "translate(-50%, -50%) translateZ(40px)" }}
              >
                模拟
              </div>
              <div
                className="tag-item"
                style={{ left: "80%", top: "35%", transform: "translate(-50%, -50%) translateZ(-30px)" }}
              >
                角色
              </div>
              <div
                className="tag-item"
                style={{ left: "45%", top: "75%", transform: "translate(-50%, -50%) translateZ(70px)" }}
              >
                射击
              </div>
              <div
                className="tag-item"
                style={{ left: "25%", top: "25%", transform: "translate(-50%, -50%) translateZ(-60px)" }}
              >
                冒险
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">拖动标签碰撞可生成组合筛选结果</p>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setActiveFilters([])
            onFilterChange([])
          }}
        >
          重置筛选
        </Button>

        <Button>应用筛选 ({activeFilters.length})</Button>
      </div>
    </div>
  )
}

