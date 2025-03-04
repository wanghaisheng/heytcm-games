import { Particles } from "@/components/particles"
import { StarMap } from "@/components/star-map"
import { GameCard } from "@/components/game-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockGames } from "@/lib/utils"
import { HerbMatchDemo } from "@/components/herb-match-demo"
import Link from "next/link"

export default function Home() {
  // Filter games by source
  const h5Games = mockGames.filter((game) => game.source === "h5")
  const tcmGames = mockGames.filter((game) => game.source === "tcm")
  const openSourceGames = mockGames.filter((game) => game.source === "opensource")

  return (
    <div className="relative">
      <Particles type="all" count={50} />

      <section className="container py-12 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">HEYTCM游戏导航站</h1>
          <p className="text-xl text-muted-foreground">探索中医游戏世界，体验五行能量流动</p>
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-bold text-center mb-8">五行星图</h2>
          <StarMap games={mockGames} />
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container space-y-8">
          <h2 className="text-2xl font-bold text-center">三源鼎立</h2>

          <Tabs defaultValue="h5" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="h5" className="data-[state=active]:bg-water data-[state=active]:text-white">
                H5轻游戏
              </TabsTrigger>
              <TabsTrigger value="tcm" className="data-[state=active]:bg-wood data-[state=active]:text-white">
                中医自研
              </TabsTrigger>
              <TabsTrigger value="opensource" className="data-[state=active]:bg-metal data-[state=active]:text-black">
                开源共创
              </TabsTrigger>
            </TabsList>

            <TabsContent value="h5" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {h5Games.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button>查看更多H5轻游戏</Button>
              </div>
            </TabsContent>

            <TabsContent value="tcm" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tcmGames.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button>查看更多中医自研游戏</Button>
              </div>
            </TabsContent>

            <TabsContent value="opensource" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {openSourceGames.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button>查看更多开源共创游戏</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="container py-12 space-y-8">
        <h2 className="text-2xl font-bold text-center">热门游戏</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockGames.slice(0, 8).map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button>查看更多游戏</Button>
        </div>
      </section>

      <section className="container py-12 space-y-8">
        <h2 className="text-2xl font-bold text-center">新游戏推荐：草药消消乐</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">中医药材三消游戏</h3>
            <p className="text-muted-foreground">
              《草药消消乐》是一款融合中医药材知识与休闲三消玩法的益智游戏。游戏中每个方块都代表一种中药材，玩家通过连接相同的药材获得分数，同时学习中药材的功效与应用。
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/games/13">了解更多</Link>
              </Button>
              <Button variant="outline">立即体验</Button>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
            <HerbMatchDemo />
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">开发者工坊</h2>
            <p className="text-muted-foreground">加入我们的开发者生态，获取中医IP开放平台资源，创建属于你的游戏</p>
            <Button>了解更多</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

