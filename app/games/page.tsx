"use client"

import { useState } from "react"
import { CategoryFilter } from "@/components/category-filter"
import { GameCard } from "@/components/game-card"
import { Particles } from "@/components/particles"
import { mockGames } from "@/lib/utils"

export default function GamesPage() {
  const [filters, setFilters] = useState<string[]>([])

  // In a real app, this would filter based on the actual filters
  const filteredGames =
    filters.length > 0
      ? mockGames.filter((game) => {
          // This is a simplified example
          if (filters.includes("h5") && game.source === "h5") return true
          if (filters.includes("tcm") && game.source === "tcm") return true
          if (filters.includes("opensource") && game.source === "opensource") return true

          // Check if any tag matches the filters
          return game.tags.some((tag) => filters.some((filter) => tag.toLowerCase().includes(filter.toLowerCase())))
        })
      : mockGames

  return (
    <div className="container py-8">
      <Particles type="all" count={30} />

      <h1 className="text-3xl font-bold mb-6">游戏库</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <CategoryFilter onFilterChange={setFilters} />
          </div>
        </div>

        <div className="md:col-span-3">
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
      </div>
    </div>
  )
}

