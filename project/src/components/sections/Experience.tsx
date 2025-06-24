import { Calendar, MapPin, GraduationCap, Code, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: "大学院進学",
    company: "名古屋工業大学大学院 工学専攻 知能情報プログラム",
    period: "2024年4月 - 現在",
    location: "名古屋",
    description: [
      "修士1年として知能情報分野の研究に従事",
      "機械学習・データ解析の理論と実践を学習",
      "研究活動を通じた問題解決能力の向上",
      "学術論文の読解と研究手法の習得"
    ],
    technologies: ["Python", "機械学習", "データ解析", "研究手法"],
    type: "学業",
    icon: GraduationCap
  },
  {
    title: "Web開発学習開始",
    company: "個人学習",
    period: "2025年5月 - 現在",
    location: "名古屋",
    description: [
      "HTML/CSS/JavaScriptの基礎から学習開始",
      "React・TypeScriptを使用したモダンWeb開発の習得",
      "GitHubを活用した開発フローの実践",
      "実際にプロダクトを作りながらの実践的学習"
    ],
    technologies: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Git"],
    type: "学習",
    icon: Code
  },
  {
    title: "学部卒業",
    company: "名古屋工業大学 情報工学科",
    period: "2020年4月 - 2024年3月",
    location: "名古屋",
    description: [
      "情報工学の基礎理論を体系的に学習",
      "プログラミング基礎（C言語、Java等）の習得",
      "アルゴリズムとデータ構造の理解",
      "卒業研究を通じた研究活動の経験"
    ],
    technologies: ["C言語", "Java", "アルゴリズム", "データ構造"],
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
            学歴 & 学習歴
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
                    <p className="text-lg font-medium text-slate-700 mb-2">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-slate-600 mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{experience.period}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{experience.location}</span>
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
              2025年修了予定で、現在は就職活動と並行してWeb開発スキルの向上に取り組んでいます。
              自社開発を行う企業で、ユーザーに価値を提供するプロダクト開発に携わることを目標としています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}