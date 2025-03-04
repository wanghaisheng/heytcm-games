"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HerbProps {
  id: number
  type: number
  x: number
  y: number
}

const herbColors = [
  "bg-amber-500", // 人参
  "bg-red-700", // 灵芝
  "bg-red-500", // 枸杞
  "bg-purple-700", // 当归
  "bg-yellow-600", // 黄芪
  "bg-amber-600", // 甘草
  "bg-green-800", // 川芎
  "bg-pink-200", // 白芍
]

const herbNames = ["人", "灵", "枸", "当", "黄", "甘", "川", "白"]

export function HerbMatchDemo() {
  const [herbs, setHerbs] = useState<HerbProps[]>([])
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number[]>([])
  const [gameStarted, setGameStarted] = useState(false)

  // 初始化游戏
  const initGame = () => {
    const newHerbs: HerbProps[] = []
    const gridSize = 6

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        newHerbs.push({
          id: y * gridSize + x,
          type: Math.floor(Math.random() * 8),
          x,
          y,
        })
      }
    }

    setHerbs(newHerbs)
    setScore(0)
    setSelected([])
    setGameStarted(true)
  }

  // 选择药材
  const selectHerb = (id: number) => {
    if (!gameStarted) return

    const herb = herbs.find((h) => h.id === id)
    if (!herb) return

    // 如果已经选中，取消选择
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((i) => i !== id))
      return
    }

    // 检查是否是相同类型
    if (selected.length > 0) {
      const firstHerb = herbs.find((h) => h.id === selected[0])
      if (!firstHerb || firstHerb.type !== herb.type) return
    }

    // 检查是否相邻
    if (selected.length > 0) {
      const lastSelected = herbs.find((h) => h.id === selected[selected.length - 1])
      if (!lastSelected) return

      const isAdjacent =
        (Math.abs(lastSelected.x - herb.x) === 1 && lastSelected.y === herb.y) ||
        (Math.abs(lastSelected.y - herb.y) === 1 && lastSelected.x === herb.x)

      if (!isAdjacent) return
    }

    setSelected((prev) => [...prev, id])
  }

  // 提交选择
  const submitSelection = () => {
    if (selected.length < 3) return

    // 计算分数
    const newScore = score + selected.length * 10
    setScore(newScore)

    // 移除选中的药材并添加新的
    const newHerbs = [...herbs]

    // 先标记要移除的药材
    selected.forEach((id) => {
      const index = newHerbs.findIndex((h) => h.id === id)
      if (index !== -1) {
        newHerbs[index] = { ...newHerbs[index], type: -1 }
      }
    })

    // 然后让上面的药材下落
    for (let x = 0; x < 6; x++) {
      let emptySpaces = 0

      for (let y = 5; y >= 0; y--) {
        const index = y * 6 + x

        if (newHerbs[index].type === -1) {
          emptySpaces++
        } else if (emptySpaces > 0) {
          const newY = y + emptySpaces
          const newIndex = newY * 6 + x

          newHerbs[newIndex] = { ...newHerbs[index] }
          newHerbs[index] = { ...newHerbs[index], type: -1 }
        }
      }

      // 在顶部添加新的药材
      for (let i = 0; i < emptySpaces; i++) {
        const y = i
        const index = y * 6 + x

        newHerbs[index] = {
          id: Math.max(...newHerbs.map((h) => h.id)) + 1 + i,
          type: Math.floor(Math.random() * 8),
          x,
          y,
        }
      }
    }

    setHerbs(newHerbs)
    setSelected([])
  }

  // 自动开始游戏
  useEffect(() => {
    initGame()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex justify-between w-full max-w-md">
        <div className="text-lg font-bold">分数: {score}</div>
        <Button size="sm" onClick={initGame}>
          重新开始
        </Button>
      </div>

      <div className="grid grid-cols-6 gap-1 w-full max-w-md aspect-square">
        {herbs.map(
          (herb) =>
            herb.type !== -1 && (
              <motion.div
                key={herb.id}
                className={`${herbColors[herb.type]} rounded-md flex items-center justify-center cursor-pointer text-white font-bold ${selected.includes(herb.id) ? "ring-2 ring-white" : ""}`}
                onClick={() => selectHerb(herb.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {herbNames[herb.type]}
              </motion.div>
            ),
        )}
      </div>

      <div className="mt-4">
        <Button disabled={selected.length < 3} onClick={submitSelection} className="w-full max-w-md">
          消除选中药材 ({selected.length})
        </Button>
      </div>

      <p className="text-sm text-muted-foreground mt-4 text-center max-w-md">
        连接三个或更多相同的药材进行消除。每消除一组药材获得分数，尝试获得最高分！
      </p>
    </div>
  )
}

