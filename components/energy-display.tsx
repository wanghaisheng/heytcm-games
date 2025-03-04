"use client"

import { useState, useEffect } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"

export function EnergyDisplay() {
  const [energyLevels, setEnergyLevels] = useState({
    metal: 45,
    wood: 70,
    water: 30,
    fire: 60,
    earth: 20,
  })

  // Simulate energy change over time
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyLevels((prev) => ({
        metal: Math.min(100, prev.metal + Math.random() * 2 - 1),
        wood: Math.min(100, prev.wood + Math.random() * 2 - 1),
        water: Math.min(100, prev.water + Math.random() * 2 - 1),
        fire: Math.min(100, prev.fire + Math.random() * 2 - 1),
        earth: Math.min(100, prev.earth + Math.random() * 2 - 1),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const totalEnergy = Object.values(energyLevels).reduce((sum, val) => sum + val, 0) / 5

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-metal via-water to-fire flex items-center justify-center text-white font-bold text-xs">
              {Math.round(totalEnergy)}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="w-64 p-4">
          <div className="space-y-3">
            <h4 className="font-medium text-center">五行能量</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>金</span>
                <span>{Math.round(energyLevels.metal)}%</span>
              </div>
              <Progress value={energyLevels.metal} className="h-1.5 bg-gray-200">
                <div className="h-full bg-metal rounded-full" style={{ width: `${energyLevels.metal}%` }}></div>
              </Progress>

              <div className="flex justify-between text-xs">
                <span>木</span>
                <span>{Math.round(energyLevels.wood)}%</span>
              </div>
              <Progress value={energyLevels.wood} className="h-1.5 bg-gray-200">
                <div className="h-full bg-wood rounded-full" style={{ width: `${energyLevels.wood}%` }}></div>
              </Progress>

              <div className="flex justify-between text-xs">
                <span>水</span>
                <span>{Math.round(energyLevels.water)}%</span>
              </div>
              <Progress value={energyLevels.water} className="h-1.5 bg-gray-200">
                <div className="h-full bg-water rounded-full" style={{ width: `${energyLevels.water}%` }}></div>
              </Progress>

              <div className="flex justify-between text-xs">
                <span>火</span>
                <span>{Math.round(energyLevels.fire)}%</span>
              </div>
              <Progress value={energyLevels.fire} className="h-1.5 bg-gray-200">
                <div className="h-full bg-fire rounded-full" style={{ width: `${energyLevels.fire}%` }}></div>
              </Progress>

              <div className="flex justify-between text-xs">
                <span>土</span>
                <span>{Math.round(energyLevels.earth)}%</span>
              </div>
              <Progress value={energyLevels.earth} className="h-1.5 bg-gray-200">
                <div className="h-full bg-earth rounded-full" style={{ width: `${energyLevels.earth}%` }}></div>
              </Progress>
            </div>
            <p className="text-xs text-muted-foreground text-center">能量满时可解锁特殊游戏和折扣</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

