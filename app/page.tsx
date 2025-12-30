'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MessageCircle, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Star, 
  HelpCircle, 
  Zap,
  ChevronDown,
  ShieldCheck,
  Building2,
  PhoneCall,
  BarChart3,
  MousePointerClick,
  Settings,
  Frown,
  AlertCircle,
  Store,
  Briefcase,
  Layers,
  MapPin,
  Smartphone,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function LP() {
  return (
    <div className="bg-white text-[#333] font-sans selection:bg-green-100 selection:text-green-700 overflow-x-hidden">
      
      {/* 1. ファーストビュー（強いオファー）：コンパクト化 */}
      <section className="relative w-full h-[45vh] min-h-[350px] md:h-auto md:min-h-0 md:aspect-[32/9] overflow-hidden flex flex-col">
        {/* 背景画像エリア */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="LINE運用代行 メインビジュアル"
            fill
            className="object-cover object-[20%_center] md:object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/70 md:via-black/10 md:to-black/80"></div>
          <div className="absolute inset-0 bg-black/20 md:hidden"></div>
        </div>

        {/* テキストコンテンツ：余白を圧縮 */}
        <div className="absolute inset-0 z-10 flex items-center justify-end p-4 md:p-[3vw]">
          <div className="flex flex-col items-end text-right text-white w-full md:w-1/2">
            <h1 className="text-2xl md:text-[3vw] font-black leading-tight tracking-tight mb-3 md:mb-[1.5vw] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              ✨LINE公式アカウントで<br />
              <span className="text-yellow-300 md:text-green-400">“売れる仕組み”</span>をつくります
            </h1>
            
            <div className="space-y-2 md:space-y-[0.5vw] mb-4 md:mb-[2vw]">
              <p className="text-sm md:text-[1.3vw] font-bold leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                登録者が増えない…反応が取れない…<br />
                <span className="inline-block border-b-2 md:border-b-[0.15vw] border-yellow-400 pb-0.5">LINE担当を雇うより安く、手離れ良く。</span>
              </p>
              <p className="text-base md:text-[1.5vw] font-bold leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                初期設定から運用まで全部プロに丸投げOK！
              </p>
            </div>

            <div className="flex flex-col gap-2 md:gap-[0.5vw] items-end">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-2 md:gap-[0.8vw] bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white text-lg md:text-[1.8vw] font-black py-3 md:py-[1vw] px-6 md:px-[2.5vw] rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative">無料相談に申し込む</span>
                <ArrowRight className="relative group-hover:translate-x-1 transition-transform w-5 h-5 md:w-[1.8vw] md:h-[1.8vw]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 1-2. 実績バナーセクション：画像全体を表示しつつ隙間を排除 */}
      <section className="achievement-banner-wrapper relative z-30">
        <img 
          src="/new_slim_banner.jpg" 
          alt="導入実績200社以上・自社サロン23店舗の運用実績"
        />
      </section>

      {/* 2. 権威性（選ばれる理由）：重厚感のある濃紺テーマ */}
      <section className="relative py-16 md:py-32 px-4 md:px-6 overflow-hidden bg-[#0f172a]">
        {/* 白い隙間が見える場合はここで調整 */}
        {/* 白いディバイダーを撤去（余白の正体を削除） */}
        
        {/* 奥行きを出すための放射状グラデーション */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(30,41,59,1)_0%,_rgba(15,23,42,1)_100%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10 pt-10">
          {/* セクション見出し */}
          <div className="text-center mb-12 md:mb-24">
            <p className="text-green-400 font-black text-xs md:text-lg tracking-[0.3em] uppercase mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter drop-shadow-xl">
              選ばれる理由と圧倒的な実績
            </h2>
            <div className="w-16 h-2 bg-green-500 mx-auto mt-6 rounded-full shadow-lg"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
            {[
              { 
                icon: <TrendingUp className="w-8 h-8 md:w-14 md:h-14" />, 
                title: "実績", 
                highlight: "200社以上", 
                main: "の構築・運用実績", 
                sub: "豊富な経験と確かな信頼",
                color: "text-green-600",
                bgColor: "bg-green-50"
              },
              { 
                icon: <Building2 className="w-8 h-8 md:w-14 md:h-14" />, 
                title: "店舗ノウハウ", 
                highlight: "23店舗", 
                main: "自社サロンを展開", 
                sub: "実証済みの成功モデル",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              { 
                icon: <Layers className="w-8 h-8 md:w-14 md:h-14" />, 
                title: "対応業種", 
                highlight: "全業種", 
                main: "どんな業種でも対応", 
                sub: "幅広い知見と適応力",
                color: "text-purple-600",
                bgColor: "bg-purple-50"
              },
              { 
                icon: <Zap className="w-8 h-8 md:w-14 md:h-14" />, 
                title: "導線設計", 
                highlight: "最短ルート", 
                main: "売上に直結する設計", 
                sub: "成果への最短最適解",
                color: "text-yellow-600",
                bgColor: "bg-yellow-50"
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-6 md:p-10 rounded-2xl md:rounded-[3rem] shadow-2xl border border-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                <div className={`mb-4 md:mb-8 p-4 md:p-6 rounded-full ${item.bgColor} ${item.color} transition-transform duration-500 group-hover:scale-110 shadow-inner`}>
                  {item.icon}
                </div>
                <p className="text-[10px] md:text-base font-black text-slate-400 uppercase tracking-widest mb-2">{item.title}</p>
                <div className="mb-2 md:mb-6">
                  <span className={`text-2xl md:text-5xl font-black ${item.color} block tracking-tighter`}>
                    {item.highlight}
                  </span>
                  <h3 className="text-[13px] md:text-xl font-bold text-slate-800 leading-tight">
                    {item.main}
                  </h3>
                </div>
                <p className="hidden md:block text-base text-slate-600 leading-relaxed font-medium">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 下部の装飾ディバイダー：滑らかな逆曲線 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-1.42,1200,34.33V0Z" fill="#ffffff" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </section>

      {/* 3. 問題提起パート */}
      <section className="relative flex items-center justify-center py-24 md:py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/problem-bg.jpg" 
            alt="Business Discussion"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tighter text-slate-900 drop-shadow-sm">
            LINEを作って<br className="md:hidden" />満足していませんか？
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-red-500 mx-auto mb-8 rounded-full shadow-sm"></div>
          <p className="text-lg md:text-3xl text-slate-800 font-black leading-relaxed mb-0">
            配信しても売上に繋がらない…<br className="md:hidden" />それには明確な理由があります。
          </p>
        </div>
      </section>

      {/* 4. 共感パート */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden flex items-center justify-center bg-slate-50">
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <h3 className="text-2xl md:text-4xl font-black text-slate-900 text-center mb-12 md:mb-20 tracking-tight">
            こんなお悩み、ありませんか？
          </h3>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              { text: "友達登録は増えるけど、予約に繋がらない", icon: <CheckCircle2 className="w-6 h-6 text-green-500" /> },
              { text: "ブロック率が高くて、配信するのが怖い", icon: <CheckCircle2 className="w-6 h-6 text-green-500" /> },
              { text: "運用が手間で、本来の接客業務を圧迫している", icon: <CheckCircle2 className="w-6 h-6 text-green-500" /> },
              { text: "設定が複雑すぎて、何が正解かわからない", icon: <CheckCircle2 className="w-6 h-6 text-green-500" /> }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 flex items-center gap-5 group hover:border-green-400 hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                <div className="bg-green-50 p-3 rounded-full flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-lg md:text-xl font-bold text-slate-800 leading-snug">
                  {item.text}
                </p>
              </motion.div>
            ))}

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="mt-12 md:mt-20 text-center md:col-span-2"
            >
              <div className="inline-flex items-center gap-4 bg-green-50 text-green-700 px-8 md:px-12 py-5 md:py-6 rounded-2xl shadow-lg border-2 border-green-200">
                <AlertTriangle className="w-6 h-6 md:w-10 md:h-10 text-green-600 animate-pulse" />
                <p className="text-xl md:text-2xl font-black leading-relaxed">
                  多くの事業者が同じ壁にぶつかっています。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. 解決策：指定の画像へ丸ごと入れ替え */}
      <section className="w-full bg-white leading-[0] p-0 m-0 overflow-hidden relative z-30">
        <Image 
          src="/解決策.jpg" 
          alt="解決策：丸投げOK！成果の出るLINE運用。見込み客導線 × 配信設計 × リピート施策をプロが代行。"
          width={1920}
          height={1080}
          className="w-full h-auto block"
          priority
        />
      </section>

      {/* 6. 得られる未来：視認性を劇的に向上させたコンパクトグリッド */}
      <section className="py-20 md:py-32 bg-white px-4 border-b border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-green-600 font-black text-sm tracking-[0.4em] uppercase mb-4">Benefit</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
              導入後に得られる未来
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full shadow-sm"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "新規集客が安定して増える", icon: <Users size={24} /> },
              { title: "リピート率が改善、売上の土台が強くなる", icon: <TrendingUp size={24} /> },
              { title: "クーポンやステップ配信で単価アップ", icon: <Star size={24} /> },
              { title: "自動で売上が動くので、本業に集中できる", icon: <Zap size={24} /> },
              { title: "人件費不要で専門家のノウハウを使える", icon: <ShieldCheck size={24} /> }
            ].map((item, i) => (
              <div key={i} className="group flex items-center gap-5 p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                <div className="flex-shrink-0 bg-green-500 text-white p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-black text-lg md:text-xl leading-snug text-slate-800 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. サービス内容：コンパクトな横長カードスタイルへリデザイン */}
      <section className="py-20 md:py-32 bg-slate-50 px-4 relative overflow-hidden">
        {/* 背景装飾：控えめに */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-400 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-12 md:mb-16 text-left md:text-center">
            <p className="text-[#C5A059] font-black text-sm tracking-[0.4em] uppercase mb-4">Service Details</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
              サービス内容
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#C5A059] to-[#E3C98E] md:mx-auto rounded-full shadow-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: "初期設定（プロフィール・応答設定・導線整備）", benefit: "面倒な設定はすべて丸投げOK" },
              { title: "リッチメニュー制作", benefit: "クリック率を高める高品質デザイン" },
              { title: "ターゲットに刺さる配信設計", benefit: "無駄打ちを防ぎ、反応率を最大化" },
              { title: "メッセージ配信代行（月◯回）", benefit: "プロのライティングでファン化を促進" },
              { title: "友だち獲得施策提案＆導線改善", benefit: "店舗に合わせた最適な集客導線を構築" },
              { title: "月次レポート＆改善提案", benefit: "数字に基づいた改善策で売上UPへ" },
              { title: "チャット対応設定／自動化仕組み構築", benefit: "24時間自動対応で機会損失をゼロに" }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-5 md:p-6 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 flex items-center gap-5">
                <div className="flex-shrink-0 bg-green-50 text-green-600 p-3 rounded-xl transition-transform group-hover:scale-110 shadow-inner">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-black text-slate-800 leading-snug group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[#C5A059] leading-relaxed">
                    {item.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 実績紹介 */}
      <section className="py-24 bg-white px-4 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">200件以上の実績 ×<br />自社23店舗で実証済み</h2>
            <div className="bg-green-50 p-8 rounded-[2rem] border border-green-100 shadow-inner mb-8">
              <p className="text-green-800 font-black text-xl">自社経営で培った「本当に売れる」ノウハウを、あなたのビジネスにそのまま導入します。</p>
            </div>
            <p className="text-xl text-gray-600 font-bold mb-8 leading-relaxed">美容・飲食・小売・サービスなど豊富な知見で、売上に直結する導線設計を行います。</p>
          </div>
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Results" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. 比較表 */}
      <section className="py-24 bg-gray-50 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-[#333] tracking-tighter">比較表</h2>
          <div className="overflow-x-auto rounded-[2.5rem] shadow-2xl bg-white border border-slate-200">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="p-8 text-left bg-slate-50 border-b border-slate-100 w-1/4 text-gray-400 font-black text-xs uppercase">比較項目</th>
                  <th className="p-8 text-center bg-slate-50 border-b border-slate-100 w-1/4 text-slate-400 font-bold">自分で運用</th>
                  <th className="p-8 text-center bg-slate-50 border-b border-slate-100 w-1/4 text-slate-400 font-bold">他社代行</th>
                  <th className="p-8 text-center bg-green-600 text-white w-1/4 text-xl font-black">当サービス</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "初期設定", self: "難しい", other: "追加料金多数", ours: "全部込み" },
                  { label: "運用代行", self: "できない", other: "内容が薄い", ours: "成果に直結" },
                  { label: "価格", self: "安い", other: "月5〜10万以上", ours: "月29,800円〜" },
                  { label: "実績", self: "なし", other: "業界限定", ours: "200件以上＋自社23店舗" },
                  { label: "本業集中", self: "できない", other: "△", ours: "100%できる" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-black border-b border-slate-100 text-slate-700">{row.label}</td>
                    <td className="p-6 text-center text-slate-400 border-b border-slate-100">{row.self}</td>
                    <td className="p-6 text-center text-slate-400 border-b border-slate-100">{row.other}</td>
                    <td className="p-6 text-center font-black text-green-700 bg-green-50/50 border-b border-slate-100 border-x-4 border-green-600/10 text-xl">{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. 料金プラン */}
      <section className="py-24 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black mb-20 text-[#333]">料金プラン</h2>
          <div className="relative group">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-10 py-3 rounded-full font-black text-xl shadow-2xl z-30 animate-pulse tracking-widest">一番人気</div>
            <div className="bg-[#333] text-white p-10 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-16 opacity-10"><BarChart3 size={150} /></div>
              <p className="text-xl font-black mb-10 tracking-[0.2em] uppercase text-green-400">運用丸投げプラン</p>
              <div className="mb-12">
                <span className="text-xl md:text-3xl font-bold opacity-50">月額</span>
                <span className="text-6xl md:text-[8rem] font-black ml-4 text-white leading-none tracking-tighter">29,800</span>
                <span className="text-2xl md:text-4xl font-black ml-4 opacity-50">円〜</span>
              </div>
              <ul className="text-left max-w-xl mx-auto space-y-6 mb-16 text-lg font-bold">
                {["初期設定・導線の整備", "リッチメニュー制作", "配信設計・コピーライティング", "月次レポート & 改善提案"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-white/10 pb-4"><ShieldCheck className="text-green-500 flex-shrink-0" size={24} /><span>{item}</span></li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white text-2xl font-black py-8 px-16 rounded-full shadow-2xl transition-all hover:scale-105 w-full md:w-auto">📩 無料相談してみる</a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-16 tracking-tighter">よくあるご質問</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "本当に丸投げで大丈夫ですか？", a: "はい。ヒアリング後は初期設定から運用まで弊社で全て代行いたします。お客様は配信内容の確認（OK出し）をしていただくだけで結構です。" },
              { q: "導入後どのくらいで効果が出ますか？", a: "アカウントの現状によりますが、1〜2ヶ月程度で配信に対する反応率の向上が数字に現れるケースがほとんどです。" },
              { q: "どのような業種に向いていますか？", a: "美容室、飲食店、小売店、スクールなど、リピートが売上の土台となるあらゆるビジネスで高い効果を発揮します。" }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 group">
                <h4 className="font-black text-xl md:text-2xl mb-8 flex gap-4 text-[#333]"><span className="text-green-600 font-black">Q.</span>{faq.q}</h4>
                <div className="flex gap-4 text-lg text-gray-600 font-medium border-t border-gray-50 pt-8"><span className="text-blue-500 font-black flex-shrink-0">A.</span><p className="leading-relaxed">{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. お客様の声 */}
      <section className="py-24 bg-white px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter text-[#333]">お客様の声</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: "美容室オーナー", quote: "「LINEだけで予約が埋まる日が増えました！」", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=300" },
              { role: "飲食店店主", quote: "「クーポン配信でリピートが+38%アップ」", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
              { role: "小売店オーナー", quote: "「自分でやっていた時と反応率が10倍違います」", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" }
            ].map((voice, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 text-center hover:bg-white hover:shadow-2xl transition-all duration-700 group border-b-8 border-b-transparent hover:border-b-green-500">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-8 border-8 border-white shadow-xl group-hover:scale-110 transition-transform"><Image src={voice.img} alt={voice.role} fill className="object-cover" /></div>
                <p className="text-green-600 font-black text-xs mb-4 tracking-[0.2em] uppercase">{voice.role}</p>
                <p className="text-2xl font-black leading-snug text-[#333] mb-6">{voice.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. クロージング */}
      <section className="py-32 bg-[#333] text-white px-4 overflow-hidden relative text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-green-400 font-black text-xl md:text-2xl mb-8 tracking-[0.2em]">＼ 行動した人から、売上が変わっています ／</p>
          <h2 className="text-3xl md:text-6xl font-black mb-12 leading-[1.2] tracking-tighter">専門知識ゼロで始められる。<br />人手不足でも売上アップできる。</h2>
          <p className="text-lg md:text-2xl font-bold text-gray-400 mb-16 leading-relaxed max-w-4xl mx-auto">本業に集中するためにも、今すぐ仕組み化を。</p>
          <a href="#contact" className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white text-2xl font-black py-8 px-16 rounded-full shadow-2xl transition-all hover:scale-105 w-full md:w-auto">🚀 まずは話だけ聞いてみたい</a>
        </div>
      </section>

      {/* 14. CTA & Footer */}
      <footer className="bg-white pt-32 pb-16 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24">
            <div>
              <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">無料相談予約</h3>
              <p className="text-xl text-gray-500 font-bold mb-12 leading-relaxed">あなたのビジネスに最適なLINE活用プランをご提案します。現状診断も無料で行っております。</p>
              <div className="space-y-6">
                <a href="#" className="flex items-center gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:bg-green-50 transition-all shadow-sm">
                  <div className="bg-green-600 text-white p-4 rounded-[1.5rem] group-hover:scale-110 transition-transform shadow-lg"><MessageCircle size={40} /></div>
                  <div className="font-black text-2xl text-[#333]">公式LINEで相談する</div>
                </a>
              </div>
            </div>
            <div className="bg-[#333] p-10 md:p-16 rounded-[4rem] shadow-2xl text-white">
              <form className="space-y-6">
                <div><label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-widest">お名前</label><input type="text" className="w-full bg-white/5 border border-white/10 p-6 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-green-500 text-lg font-bold transition-all placeholder:text-gray-700" placeholder="山田 太郎" /></div>
                <div><label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-widest">会社名 / 屋号</label><input type="text" className="w-full bg-white/5 border border-white/10 p-6 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-green-500 text-lg font-bold transition-all placeholder:text-gray-700" placeholder="株式会社〇〇" /></div>
                <div><label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-widest">メールアドレス</label><input type="email" className="w-full bg-white/5 border border-white/10 p-6 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-green-500 text-lg font-bold transition-all placeholder:text-gray-700" placeholder="example@mail.com" /></div>
                <div><label className="block text-xs font-black text-gray-500 mb-3 uppercase tracking-widest">ご相談内容</label><textarea className="w-full bg-white/5 border border-white/10 p-6 rounded-[2rem] h-40 focus:outline-none focus:ring-4 focus:ring-green-500 text-lg font-bold transition-all placeholder:text-gray-700" placeholder="LINE運用について詳しく聞きたい"></textarea></div>
                <button className="w-full bg-green-600 text-white font-black py-8 rounded-[2rem] text-2xl shadow-2xl hover:bg-green-500 transition-all active:scale-[0.98]">無料相談を申し込む</button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-16 text-center text-gray-400 font-bold uppercase tracking-[0.5em] text-xs">&copy; 2024 LINE STRATEGY EXPERTS. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
}
