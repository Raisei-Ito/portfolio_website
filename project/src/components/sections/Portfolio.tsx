import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "学習記録アプリ",
    description: "日々の学習内容を記録・管理するWebアプリケーション。学習時間の可視化と目標設定機能を実装。",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
    githubUrl: "https://github.com/Raisei-Ito",
    status: "開発中",
    featured: true
  },
  {
    title: "ポートフォリオサイト",
    description: "このサイト自体！React + TypeScript + Tailwind CSSで構築した就活用ポートフォリオサイト。",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Raisei-Ito",
    status: "完成",
    featured: true
  },
  {
    title: "ToDoアプリ",
    description: "シンプルなタスク管理アプリ。CRUD操作の基本を学習するために作成した初期プロジェクト。",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Raisei-Ito",
    status: "完成",
    featured: false
  },
  {
    title: "計算機アプリ",
    description: "JavaScript の基本文法を学習するために作成した電卓アプリ。四則演算と基本的なUI操作を実装。",
    image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Raisei-Ito",
    status: "完成",
    featured: false
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            制作実績
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            学習を通じて作成したプロジェクトをご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    project.status === '完成' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-orange-600 hover:bg-orange-700'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-slate-800 hover:bg-slate-900 transition-all duration-300 group/btn"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    project.status === '完成' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-orange-600 hover:bg-orange-700'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="p-2 h-8 w-8"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">今後の開発予定</h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
              現在はバックエンドの基礎を勉強しており、
              より複雑なWebアプリケーションの開発に挑戦していく予定です。
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open('https://github.com/Raisei-Ito', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHubで学習の軌跡を見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}