import { ArrowDown, Github, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ポートフォリオサイト
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-2">Web開発者志望</p>
          <p className="text-lg md:text-xl text-slate-500 font-medium">
            「学び続け、技術で価値を創造する」
          </p>
        </div>
        
        <div className="mb-8 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            CS専攻の修士1年の伊藤来晟のポートフォリオサイトになります。<br />
            2025年5月から本格的な技術学習をスタートし、趣味でWeb開発に取り組んでいます。<br />
            自社開発を行う企業で、ユーザーに価値を提供するプロダクト開発に携わりたいと考えています。<br />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 group"
            onClick={() => window.open('https://github.com/Raisei-Ito', '_blank')}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            GitHub を見る
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            お問い合わせ
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}