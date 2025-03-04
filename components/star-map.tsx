"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GameCard, type GameCardProps } from "@/components/game-card"

interface StarMapProps {
  games: GameCardProps[]
}

export function StarMap({ games }: StarMapProps) {
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [filteredGames, setFilteredGames] = useState<GameCardProps[]>(games)

  useEffect(() => {
    if (selectedElement) {
      const elementToCategory: Record<string, string[]> = {
        metal: ["策略", "卡牌"],
        wood: ["模拟", "经营"],
        water: ["休闲", "益智"],
        fire: ["动作", "射击"],
        earth: ["角色", "RPG"],
      }

      const categories = elementToCategory[selectedElement] || []
      setFilteredGames(games.filter((game) => categories.some((cat) => game.category.includes(cat))))
    } else {
      setFilteredGames(games)
    }
  }, [selectedElement, games])

  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([])

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }))
    setStars(newStars)
  }, [])

  const handleElementClick = (element: string) => {
    setSelectedElement((prev) => (prev === element ? null : element))
  }

  return (
    <div className="space-y-8">
      <div className="star-map">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        <div className="taiji" />

        <motion.div
          className="element-node element-node-metal"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleElementClick("metal")}
        >
          金
        </motion.div>

        <motion.div
          className="element-node element-node-wood"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleElementClick("wood")}
        >
          木
        </motion.div>

        <motion.div
          className="element-node element-node-water"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleElementClick("water")}
        >
          水
        </motion.div>

        <motion.div
          className="element-node element-node-fire"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleElementClick("fire")}
        >
          火
        </motion.div>

        <motion.div
          className="element-node element-node-earth"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleElementClick("earth")}
        >
          土
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.slice(0, 8).map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  )
}

