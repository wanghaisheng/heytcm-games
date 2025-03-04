import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export interface GameCardProps {
  id: string
  title: string
  thumbnail: string
  category: string
  tags: string[]
  source: "h5" | "tcm" | "opensource"
  rating: number
  players: number
}

export function GameCard({ id, title, thumbnail, category, tags, source, rating, players }: GameCardProps) {
  const sourceClass = {
    h5: "game-card-h5",
    tcm: "game-card-tcm",
    opensource: "game-card-opensource",
  }

  const sourceLabel = {
    h5: "H5轻游戏",
    tcm: "中医自研",
    opensource: "开源共创",
  }

  const sourceColor = {
    h5: "bg-water text-white",
    tcm: "bg-wood text-white",
    opensource: "bg-metal text-black",
  }

  return (
    <Link href={`/games/${id}`}>
      <Card className={`game-card overflow-hidden ${sourceClass[source]}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className={`absolute top-2 right-2 ${sourceColor[source]}`}>{sourceLabel[source]}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{category}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span> {rating.toFixed(1)}
          </div>
          <div>{players.toLocaleString()} 人在玩</div>
        </CardFooter>
      </Card>
    </Link>
  )
}

