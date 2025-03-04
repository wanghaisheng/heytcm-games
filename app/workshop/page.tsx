import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Particles } from "@/components/particles"

export default function WorkshopPage() {
  return (
    <div className="container py-8">
      <Particles type="all" count={30} />

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">开发者工坊</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          加入HEYTCM开发者生态，获取中医IP资源，创建属于你的游戏
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button>注册开发者账号</Button>
          <Button variant="outline">浏览文档</Button>
        </div>
      </div>

      <Tabs defaultValue="resources" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="resources">中医素材库</TabsTrigger>
          <TabsTrigger value="api">API接口</TabsTrigger>
          <TabsTrigger value="showcase">开发者作品</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>五行素材包</CardTitle>
                <CardDescription>包含五行相关的图标、特效和音效</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="五行素材包预览"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">图标 x 50</Badge>
                  <Badge variant="outline">特效 x 20</Badge>
                  <Badge variant="outline">音效 x 15</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  适用于各类游戏的五行元素表现，包含金木水火土五种元素的完整素材集。
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">下载素材包</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>经络穴位图谱</CardTitle>
                <CardDescription>人体经络和穴位的详细图谱</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="经络穴位图谱预览"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">图谱 x 12</Badge>
                  <Badge variant="outline">穴位 x 361</Badge>
                  <Badge variant="outline">3D模型 x 1</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  完整的人体十二经络和361个穴位图谱，包含位置、功效和关联信息。
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">下载素材包</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>中药材图鉴</CardTitle>
                <CardDescription>常见中药材的图片和信息</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt="中药材图鉴预览"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline">药材 x 100</Badge>
                  <Badge variant="outline">图片 x 300</Badge>
                  <Badge variant="outline">信息卡 x 100</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  收录100种常见中药材的高清图片、功效介绍和游戏化属性建议。
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">下载素材包</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">素材使用协议</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>• 免费素材：可用于非商业项目，需注明"素材来源：HEYTCM"。</p>
              <p>• 商业素材：订阅会员（99元/月）可用于商业项目，流水超过1万元需支付5%版权费。</p>
              <p>• 独占素材：可联系我们定制独占素材，价格另议。</p>
            </div>
            <div className="mt-6 flex gap-4">
              <Button variant="outline">查看完整协议</Button>
              <Button>订阅会员</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>中医知识库API</CardTitle>
                <CardDescription>中医理论、方剂、药材的结构化数据</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded p-4 font-mono text-sm overflow-x-auto">
                  GET /api/herbs?name=灵芝&properties=true
                </div>
                <p className="text-sm text-muted-foreground">
                  提供中医药材、方剂、理论的结构化数据查询，支持按名称、功效、五行属性等多维度检索。
                </p>
                <div className="flex gap-2">
                  <Badge>REST API</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>每日10,000次免费请求</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">查看API文档</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>五行计算引擎</CardTitle>
                <CardDescription>基于五行相生相克的游戏平衡系统</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded p-4 font-mono text-sm overflow-x-auto">
                  POST /api/wuxing/calculate
                  {`{
  "source": "fire",
  "target": "metal",
  "intensity": 0.8
}`}
                </div>
                <p className="text-sm text-muted-foreground">
                  提供五行相生相克的计算引擎，可用于游戏伤害计算、属性克制、技能效果等系统设计。
                </p>
                <div className="flex gap-2">
                  <Badge>WebSocket</Badge>
                  <Badge>SDK</Badge>
                  <Badge>实时计算</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">查看API文档</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>经络穴位定位API</CardTitle>
                <CardDescription>人体经络穴位的3D定位系统</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded p-4 font-mono text-sm overflow-x-auto">
                  GET /api/acupoints/locate?name=足三里&model=3d
                </div>
                <p className="text-sm text-muted-foreground">
                  提供人体经络穴位的精确3D坐标定位，支持VR/AR应用开发，包含穴位功效和关联信息。
                </p>
                <div className="flex gap-2">
                  <Badge>3D坐标</Badge>
                  <Badge>AR支持</Badge>
                  <Badge>Unity插件</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">查看API文档</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>中医诊断模拟器</CardTitle>
                <CardDescription>基于症状的中医诊断推理系统</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded p-4 font-mono text-sm overflow-x-auto">
                  POST /api/diagnosis/analyze
                  {`{
  "symptoms": ["头痛", "口干", "心烦"],
  "tongue": "红",
  "pulse": "弦"
}`}
                </div>
                <p className="text-sm text-muted-foreground">
                  提供基于症状的中医诊断推理系统，可用于医疗模拟游戏、角色扮演游戏的诊断系统。
                </p>
                <div className="flex gap-2">
                  <Badge>AI推理</Badge>
                  <Badge>多维诊断</Badge>
                  <Badge>处方生成</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">查看API文档</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">API订阅计划</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>基础版</CardTitle>
                  <CardDescription>适合个人开发者</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">免费</div>
                  <ul className="space-y-2 text-sm">
                    <li>• 每日10,000次API调用</li>
                    <li>• 基础知识库访问</li>
                    <li>• 社区支持</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    注册使用
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>专业版</CardTitle>
                  <CardDescription>适合小型工作室</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">¥99/月</div>
                  <ul className="space-y-2 text-sm">
                    <li>• 每日100,000次API调用</li>
                    <li>• 完整知识库访问</li>
                    <li>• 五行计算引擎</li>
                    <li>• 邮件技术支持</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">订阅专业版</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>企业版</CardTitle>
                  <CardDescription>适合商业游戏开发</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">¥999/月</div>
                  <ul className="space-y-2 text-sm">
                    <li>• 无限API调用</li>
                    <li>• 专属服务器部署</li>
                    <li>• 全部高级功能</li>
                    <li>• 7x24小时技术支持</li>
                    <li>• 定制开发支持</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">联系销售</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="showcase" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="开发者作品预览"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>针灸大师</CardTitle>
                <CardDescription>由开发者"中医游戏工作室"开发</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  一款基于HEYTCM经络穴位API开发的针灸模拟游戏，玩家需要在3D人体模型上精确找到穴位位置。
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">经络API</Badge>
                  <Badge variant="outline">3D模型</Badge>
                  <Badge variant="outline">教育游戏</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  查看详情
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="开发者作品预览"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>五行战记</CardTitle>
                <CardDescription>由开发者"元气游戏"开发</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  一款基于五行相生相克的策略卡牌游戏，使用HEYTCM五行计算引擎实现复杂的战斗机制。
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">五行引擎</Badge>
                  <Badge variant="outline">卡牌游戏</Badge>
                  <Badge variant="outline">多人对战</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  查看详情
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="开发者作品预览"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>本草奇缘</CardTitle>
                <CardDescription>由开发者"药王谷工作室"开发</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  一款开放世界RPG游戏，玩家扮演药农收集各种中药材，使用HEYTCM中药材图鉴API实现真实药材知识。
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">中药API</Badge>
                  <Badge variant="outline">开放世界</Badge>
                  <Badge variant="outline">收集养成</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  查看详情
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center">
            <Button>查看更多开发者作品</Button>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">提交你的作品</h3>
            <p className="text-muted-foreground mb-6">
              使用HEYTCM资源开发的游戏可以提交到我们的展示区，优秀作品将获得推荐位展示和技术支持。
            </p>
            <Button>提交作品</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

