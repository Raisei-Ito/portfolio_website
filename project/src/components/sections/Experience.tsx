import { Calendar, GraduationCap, Code, BookOpen, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: "Mind Journal アプリ開発",
    period: "2025年6月 - 現在",
    description: [
      "マインドフルネス日記アプリの個人開発プロジェクト",
      "React 18・TypeScript・Viteを使用したフロントエンド構築",
      "Supabaseによるバックエンド・データベース設計",
      "感情トレンド分析・カレンダー機能・認証システムの実装"
    ],
    technologies: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
    type: "学習",
    icon: Smartphone
  },
  {
    title: "Web開発学習開始",
    period: "2025年5月",
    description: [
      "バックエンドの基礎から学習開始",
      "Django,FastAPIを使用した簡単なWebアプリケーションの開発",
      "ブログアプリや会議室予約アプリの開発"
    ],
    technologies: ["HTML/CSS", "JavaScript", "Python", "Django", "FastAPI", "Git"],
    type: "学習",
    icon: Code
  },
  {
    title: "大学院進学",
    period: "2025年4月 - 現在",
    description: [
      "修士1年として知能情報分野の研究に従事",
      "強化学習(因果推論)を用いた知能ロボットの研究",
      "研究活動を通じた問題解決能力の向上"
    ],
    technologies: ["Python", "機械学習", "強化学習", "知能ロボット"],
    type: "学業",
    icon: GraduationCap
  },
  {
    title: "学部卒業",
    period: "2021年4月 - 2025年3月",
    description: [
      "プログラミング基礎（C,C++,Python等）の習得",
      "卒業研究を通じた画像認識・機械学習の経験",
      "ROSなどのロボットシステムの経験",
      "ロボットの経路計画・制御の経験"
    ],
    technologies: ["C言語", "Python", "機械学習", "ロボットシステム", "ロボットの経路計画", "ロボットの制御"],
    type: "学業",
    icon: BookOpen
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            経歴
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            これまでの学習経験と現在取り組んでいる活動
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <experience.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {experience.title}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${experience.type === '学業' ? 'bg-green-100 text-green-700' : ''}
                          ${experience.type === '学習' ? 'bg-blue-100 text-blue-700' : ''}
                        `}
                      >
                        {experience.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-slate-600 mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{experience.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">今後の目標</h3>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              2027年修了予定で、現在は就職活動と並行してWeb開発スキルの向上に取り組んでいます。<br />
              新卒で自社開発を行う企業に就職し、プロダクト開発に携わることを目標としています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}