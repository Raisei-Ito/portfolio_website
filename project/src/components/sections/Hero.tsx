import { ArrowDown, Github, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 技術スタックアイコンのコンポーネント
const TechIcon = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`flex items-center justify-center w-30 h-30 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 ${className}`}>
    {children}
  </div>
);

// 流れるアニメーション行のコンポーネント
const FloatingTechRow = ({ direction = "left", speed = "20s", delay = "0s", techSet }: { direction?: string, speed?: string, delay?: string, techSet: React.ReactNode[] }) => {
  // 滑らかな無限ループのために十分な数のコピーを作成
  const repeatedTechSet = Array(6).fill(techSet).flat();

  return (
    <div className="flex gap-8 animate-scroll" 
         style={{ 
           animationDirection: direction === "right" ? "reverse" : "normal",
           animationDuration: speed,
           animationDelay: delay
         }}>
      {repeatedTechSet.map((logo, index) => (
        <TechIcon key={index} className="flex-shrink-0">
          {logo}
        </TechIcon>
      ))}
    </div>
  );
};

export function Hero() {
  // フロントエンド技術
  const frontendTech = [
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" alt="Angular" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="75" height="75" />,
  ];

  // バックエンド技術
  const backendTech = [
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" width="75" height="75" />,
    <svg width="75" height="75" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="50" fill="#009688"/>
      <path d="M30 25 L70 25 L55 45 L65 45 L35 75 L45 50 L35 50 L50 25 Z" fill="white"/>
    </svg>,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width="75" height="75" />,
  ];

  // データベース・インフラ
  const databaseInfra = [
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" width="75" height="75" />,
  ];

  // 開発ツール
  const devTools = [
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="75" height="75" />,
    <img src="https://vitejs.dev/logo.svg" alt="Vite" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" width="75" height="75" />,
  ];

  // プログラミング言語
  const languages = [
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" width="75" height="75" />,
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" width="75" height="75" />,
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4 overflow-hidden">
      {/* 流れる背景アニメーション */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute left-0 w-full" style={{ top: '10%' }}>
          <FloatingTechRow direction="left" speed="25s" delay="0s" techSet={frontendTech} />
        </div>
        <div className="absolute left-0 w-full" style={{ top: '25%' }}>
          <FloatingTechRow direction="right" speed="30s" delay="2s" techSet={backendTech} />
        </div>
        <div className="absolute left-0 w-full" style={{ top: '50%' }}>
          <FloatingTechRow direction="left" speed="35s" delay="4s" techSet={databaseInfra} />
        </div>
        <div className="absolute left-0 w-full" style={{ top: '75%' }}>
          <FloatingTechRow direction="right" speed="28s" delay="1s" techSet={devTools} />
        </div>
        <div className="absolute left-0 w-full" style={{ top: '90%' }}>
          <FloatingTechRow direction="left" speed="32s" delay="3s" techSet={languages} />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ポートフォリオサイト
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium">
            「学び続け、技術で価値を創造する」
          </p>
        </div>
        
        <div className="mb-8 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              CS専攻の修士1年の<span className="text-blue-600 font-semibold">伊藤来晟</span>のポートフォリオサイトになります。<br />
              2025年5月から技術学習をスタートし、趣味でWeb開発に取り組んでいます。<br />
              <span className="text-purple-600 font-medium">自社開発を行う企業で、ユーザーに価値を提供するプロダクト開発に携わりたいと考えています。</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://github.com/Raisei-Ito', '_blank')}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            GitHub を見る
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-white/80 backdrop-blur-sm"
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