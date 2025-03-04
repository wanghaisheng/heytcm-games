"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Particles } from "@/components/particles"

export default function EnergyMarketPage() {
  const [selectedEnergy, setSelectedEnergy] = useState<string | null>(null)

  const energyTypes = [
    { type: "metal", name: "金", color: "bg-metal text-black", value: 120 },
    { type: "wood", name: "木", color: "bg-wood text-white", value: 85 },
    { type: "water", name: "水", color: "bg-water text-white", value: 150 },
    { type: "fire", name: "火", color: "bg-fire text-white", value: 95 },
    { type: "earth", name: "土", color: "bg-earth text-black", value: 110 },
  ]

  const items = [
    { id: 1, name: "灵芝", type: "wood", price: 50, seller: "药王谷", description: "提升角色生命恢复速度" },
    { id: 2, name: "人参", type: "earth", price: 120, seller: "丹青阁", description: "增加角色能量上限" },
    { id: 3, name: "朱砂", type: "fire", price: 80, seller: "火云洞", description: "提高火系技能伤害" },
    { id: 4, name: "金针", type: "metal", price: 65, seller: "铸剑山庄", description: "增加暴击率" },
    { id: 5, name: "灵泉", type: "water", price: 90, seller: "碧水轩", description: "减少技能冷却时间" },
  ]

  return (
    <div className="container py-8">
      <Particles type={(selectedEnergy as any) || "all"} count={40} />

      <h1 className="text-3xl font-bold mb-2">能量交易市场</h1>
      <p className="text-muted-foreground mb-8">交易五行能量，获取游戏道具与优惠</p>

      <Tabs defaultValue="energy" className="space-y-8">
        <TabsList>
          <TabsTrigger value="energy">能量交易</TabsTrigger>
          <TabsTrigger value="items">道具交易</TabsTrigger>
          <TabsTrigger value="coupons">优惠券</TabsTrigger>
        </TabsList>

        <TabsContent value="energy" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {energyTypes.map((energy) => (
              <Card
                key={energy.type}
                className={`cursor-pointer transition-all ${selectedEnergy === energy.type ? "ring-2 ring-primary" : ""}`}
                onClick={() => setSelectedEnergy(energy.type === selectedEnergy ? null : energy.type)}
              >
                <CardHeader className={`${energy.color} py-4`}>
                  <CardTitle className="text-center text-2xl">{energy.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 text-center">
                  <p className="text-3xl font-bold">{energy.value}</p>
                  <p className="text-sm text-muted-foreground">当前能量</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    {selectedEnergy === energy.type ? "取消选择" : "选择"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {selectedEnergy && (
            <Card>
              <CardHeader>
                <CardTitle>交易{energyTypes.find((e) => e.type === selectedEnergy)?.name}能量</CardTitle>
                <CardDescription>
                  当前市场价格: {energyTypes.find((e) => e.type === selectedEnergy)?.value} 能量 = 100 游戏代币
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-1 block">出售数量</label>
                    <Input
                      type="number"
                      placeholder="输入能量数量"
                      min="1"
                      max={energyTypes.find((e) => e.type === selectedEnergy)?.value}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-1 block">获得代币</label>
                    <Input type="number" readOnly value="0" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">交易说明</label>
                  <p className="text-sm text-muted-foreground">
                    • 交易将收取5%的平台手续费
                    <br />• 能量交易后立即到账
                    <br />• 每日交易上限为200点能量
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">确认交易</Button>
              </CardFooter>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>近期交易记录</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-fire text-white">火</Badge>
                    <span>出售 50 点能量</span>
                  </div>
                  <div className="text-muted-foreground">获得 45 代币</div>
                  <div className="text-sm text-muted-foreground">2小时前</div>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-water text-white">水</Badge>
                    <span>出售 30 点能量</span>
                  </div>
                  <div className="text-muted-foreground">获得 27 代币</div>
                  <div className="text-sm text-muted-foreground">昨天</div>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-metal text-black">金</Badge>
                    <span>出售 100 点能量</span>
                  </div>
                  <div className="text-muted-foreground">获得 90 代币</div>
                  <div className="text-sm text-muted-foreground">3天前</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="items" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{item.name}</span>
                    <Badge
                      className={`bg-${item.type} ${item.type === "metal" || item.type === "earth" ? "text-black" : "text-white"}`}
                    >
                      {energyTypes.find((e) => e.type === item.type)?.name}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{item.seller}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="text-2xl font-bold">{item.price} 代币</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">购买</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">加载更多</Button>
          </div>
        </TabsContent>

        <TabsContent value="coupons" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-fire/10">
                <CardTitle>火能量兑换券</CardTitle>
                <CardDescription>使用火能量兑换游戏内抽卡折扣</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground">所需能量</span>
                  <span className="font-medium">100 火能量</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">获得折扣</span>
                  <span className="font-medium">十连抽8折</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">兑换</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-wood/10">
                <CardTitle>木能量兑换券</CardTitle>
                <CardDescription>使用木能量兑换游戏内成长加速</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground">所需能量</span>
                  <span className="font-medium">80 木能量</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">获得加成</span>
                  <span className="font-medium">经验获取+50%（24小时）</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">兑换</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-water/10">
                <CardTitle>水能量兑换券</CardTitle>
                <CardDescription>使用水能量兑换游戏内体力恢复</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground">所需能量</span>
                  <span className="font-medium">60 水能量</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">获得恢复</span>
                  <span className="font-medium">体力恢复速度+100%（12小时）</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">兑换</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="bg-metal/10">
                <CardTitle>金能量兑换券</CardTitle>
                <CardDescription>使用金能量兑换游戏内装备强化</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground">所需能量</span>
                  <span className="font-medium">120 金能量</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">获得强化</span>
                  <span className="font-medium">装备强化成功率+20%（10次）</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">兑换</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

