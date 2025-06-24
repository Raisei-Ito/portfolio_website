import { Code, Database, Smartphone, Brain, Globe, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: "フロントエンド",
    icon: Globe,
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
    level: "学習中"
  },
  {
    title: "バックエンド",
    icon: Server,
    skills: ["Node.js", "Python", "FastAPI", "Django"],
    color: "from-green-500 to-emerald-500",
    level: "学習中"
  },
  {
    title: "データベース",
    icon: Database,
    skills: ["MySQL", "SQLite", "SQLAlchemy", "PostgreSQL"],
    color: "from-orange-500 to-red-500",
    level: "基礎"
  },
  {
    title: "開発ツール",
    icon: Code,
    skills: ["GitHub", "VS Code", "Cursor", "Bolt.new", "Docker"],
    color: "from-slate-500 to-gray-500",
    level: "学習中"
  },
  {
    title: "学術・研究",
    icon: Brain,
    skills: ["因果推論", "LLM", "知能ロボット"],
    color: "from-indigo-500 to-purple-500",
    level: "大学院"
  },
  {
    title: "その他",
    icon: Smartphone,
    skills: ["デザインパターン", "OOP"],
    color: "from-purple-500 to-pink-500",
    level: "学習中"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            スキル & 学習領域
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            現在学習中の技術スタックと今後習得予定の技術領域
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                    {category.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">学習への取り組み</h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              2025年5月から本格的な技術学習を開始し、現在は基礎から着実にスキルを積み上げています。
              実際にプロダクトを作りながら学ぶことを重視し、GitHubで学習の軌跡を公開しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}