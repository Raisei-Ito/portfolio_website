import { Mail, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    label: "メール",
    value: "raisei.ito@example.com",
    href: "mailto:raisei.ito@example.com",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Raisei-Ito",
    href: "https://github.com/Raisei-Ito",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/raisei-ito",
    href: "https://linkedin.com/in/raisei-ito",
    color: "from-blue-600 to-blue-800"
  },
  {
    icon: GraduationCap,
    label: "大学",
    value: "名古屋工業大学大学院",
    href: "https://www.nitech.ac.jp/",
    color: "from-green-500 to-emerald-600"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            お問い合わせ
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            お気軽にご連絡ください。新しい機会やプロジェクトについてお話しできることを楽しみにしています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{method.label}</h3>
                    <a 
                      href={method.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-300 break-all"
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 inline-block">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">現在地：名古屋</span>
              </div>
              <p className="text-slate-300 mb-4">
                2025年3月修了予定・フルタイム勤務可能
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:raisei.ito@example.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                メールを送る
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}