import React from 'react';
import Image from 'next/image';
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
  AlertCircle
} from 'lucide-react';

export default function LP() {
  return (
    <div className="bg-white text-[#333] font-sans selection:bg-green-100 selection:text-green-700 overflow-x-hidden">
      
      {/* 1. ファーストビュー（強いオファー） */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920" 
            alt="LINE運用代行 メインビジュアル"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 py-32 text-center text-white">
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight mb-10 drop-shadow-2xl">
            ✨LINE公式アカウントで<br />
            <span className="text-green-400">“売れる仕組み”</span>をつくります
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-100 mb-12 max-w-4xl mx-auto leading-[1.8] font-medium drop-shadow-lg">
            登録者が増えない…反応が取れない…<br className="hidden md:block" />
            <span className="font-bold border-b-4 border-green-500 pb-1">LINE担当を雇うより安く、手離れ良く。</span><br />
            初期設定から毎月運用まで全部プロに丸投げOK！
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#contact" className="group bg-green-600 hover:bg-green-500 text-white text-2xl font-black py-8 px-16 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-4">
              📩 まずは無料相談する 
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. 権威性（選ばれる理由）：真っ白（bg-white） */}
      <section className="py-24 md:py-32 bg-white px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-green-600 font-black text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Authority</p>
            <h2 className="text-3xl md:text-6xl font-black text-[#333] tracking-tighter italic">選ばれる理由</h2>
            <div className="w-16 md:w-20 h-1.5 bg-green-500 mx-auto mt-6 md:mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {[
              { category: "実績", title: "200社以上", sub: "構築・運用実績", detail: "多種多様な業界で結果を出し続けてきた圧倒的導入数。", icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" /> },
              { category: "独自性", title: "23店舗", sub: "自社展開で実証済み", detail: "自社サロン経営で磨き上げた「本当に売れる」ノウハウ。", icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" /> },
              { category: "柔軟性", title: "業種不問", sub: "全業種に対応", detail: "美容・飲食・小売・サービスなど豊富な知見で対応。", icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
              { category: "専門性", title: "戦略構築", sub: "売上に直結する導線", detail: "売上に直結する導線設計のプロが戦略的にサポート。", icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 md:p-10 rounded-2xl md:rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-t-green-500 md:border-t-transparent text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-8">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">{item.icon}</div>
                </div>
                <div className="mb-3 md:mb-6">
                  <h3 className="text-xl md:text-3xl font-black text-green-600 leading-none mb-1 md:mb-2 tracking-tighter">{item.title}</h3>
                  <p className="text-xs md:text-lg font-black text-[#333] leading-tight">{item.sub}</p>
                </div>
                <p className="text-[13px] md:text-[15px] text-gray-500 leading-relaxed font-medium mt-2 md:mt-4">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 問題提起パート：画像背景（暗め）＋白文字 */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-32 md:py-48 px-4 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            alt="Serious Business Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter drop-shadow-2xl">
            LINE作って<br className="md:hidden" />満足していませんか？
          </h2>
          <div className="w-24 h-1.5 bg-red-500 mx-auto mb-12 rounded-full"></div>
          <p className="text-xl md:text-4xl text-gray-200 font-bold leading-relaxed drop-shadow-lg italic">
            配信しても売上に繋がらない…<br />それには理由があります。
          </p>
        </div>
      </section>

      {/* 4. 共感パート：明るい背景とすりガラス効果のデザイン */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden border-b border-gray-100 flex items-center justify-center min-h-[50vh]">
        {/* 背景画像：明るく鮮明に見えるようオーバーレイを薄く設定 */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" 
            alt="悩むビジネスオーナー"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div> {/* オーバーレイを薄く */}
        </div>

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <h3 className="text-2xl md:text-5xl font-black text-white text-center mb-12 md:mb-20 tracking-tight drop-shadow-md">
            こんな状況ありませんか？
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { text: "友達登録は増えるけど、予約に繋がらない…", icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> },
              { text: "ブロック率が高くて、配信するのが怖い…", icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> },
              { text: "運用が手間で、本来の接客業務を圧迫している…", icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> },
              { text: "設定が複雑すぎて、何が正解かわからない…", icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white/30 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-white/40 flex items-center gap-4 group hover:bg-white/40 transition-all duration-300 shadow-lg">
                <div className="bg-white/80 p-2 md:p-3 rounded-full flex-shrink-0 shadow-sm">
                  {item.icon}
                </div>
                <p className="text-base md:text-xl font-bold text-slate-900 leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-20 text-center">
            <p className="text-lg md:text-2xl font-black text-green-600 leading-relaxed bg-white/90 backdrop-blur-sm inline-block px-8 py-4 rounded-full border border-green-100 shadow-xl">
              多くの事業者が同じ壁にぶつかっています。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 解決策：丸投げOK！成果の出るLINE運用 */}
      <section className="py-32 md:py-48 bg-green-600 text-white px-4 relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-green-200 font-black text-xl mb-6 tracking-widest uppercase">The Solution</p>
          <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight">
            解決策：丸投げOK！<br />
            成果の出るLINE運用
          </h2>
          <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-[4rem] border border-white/20 mb-16 inline-block w-full shadow-2xl">
            <p className="text-xl md:text-4xl mb-12 font-bold leading-relaxed">
              売上に繋げるためには、<br />
              <span className="text-yellow-300 border-b-4 border-yellow-300 pb-2 italic font-black">“見込み客導線 × 配信設計 × リピート施策”</span>の3つが必要。
            </p>
            <p className="text-4xl md:text-6xl font-black text-white italic">
              それ全部、プロが代わりにやります。
            </p>
          </div>
        </div>
      </section>

      {/* 6. 得られる未来（新規 × リピート × 単価アップ）：真っ白（bg-white） */}
      <section className="py-32 bg-white px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">得られる未来</h2>
            <div className="w-32 h-2 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {[
              { title: "新規集客が安定して増える", icon: <Users size={32} /> },
              { title: "リピート率が改善、売上の土台が強くなる", icon: <TrendingUp size={32} /> },
              { title: "クーポンやステップ配信で単価アップ", icon: <Star size={32} /> },
              { title: "自動で売上が動くので、本業に集中できる", icon: <Zap size={32} /> },
              { title: "人件費不要で専門家のノウハウを使える", icon: <ShieldCheck size={32} /> }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 p-12 bg-gray-50 rounded-[3rem] border border-gray-100 items-start hover:bg-green-50 transition-all duration-500 shadow-sm">
                <div className="bg-green-500 text-white p-4 rounded-2xl shadow-lg">{item.icon}</div>
                <div><h4 className="font-black text-2xl leading-relaxed text-[#333]">{item.title}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. サービス内容：ごく薄いグリーン（bg-[#F0FDF4]） */}
      <section className="py-32 bg-[#F0FDF4] px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-xl border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 -z-10"></div>
            <h2 className="text-4xl md:text-5xl font-black mb-20">サービス内容</h2>
            <div className="grid md:grid-cols-2 gap-y-12 gap-x-20 text-left">
              {[
                "初期設定（プロフィール・応答設定・導線整備）", "リッチメニュー制作", "ターゲットに刺さる配信設計", "メッセージ配信代行（月◯回）",
                "友だち獲得施策提案＆導線改善", "月次レポート＆改善提案", "チャット対応設定／自動化仕組み構築"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 text-xl font-bold text-gray-700 border-b border-gray-50 pb-8 group">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform"><CheckCircle2 size={24} /></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. 実績紹介（200件以上 × 自社23店舗でも実証済み） */}
      <section className="py-32 bg-white px-4 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight">200件以上の実績 ×<br />自社23店舗で実証済み</h2>
            <div className="bg-green-50 p-10 rounded-[3rem] border border-green-100 shadow-inner mb-12">
              <p className="text-green-800 font-black text-2xl">自社経営で培った「本当に売れる」ノウハウを、あなたのビジネスにそのまま導入します。</p>
            </div>
            <p className="text-2xl text-gray-600 font-bold mb-12 leading-relaxed">美容・飲食・小売・サービスなど豊富な知見で、売上に直結する導線設計を行います。</p>
          </div>
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative h-[500px] md:h-[750px] w-full rounded-[4rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Results" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. 比較表（自分で運用／他社／当社） */}
      <section className="py-32 bg-gray-50 px-4 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-24 text-[#333] tracking-tighter">比較表（差別化）</h2>
          <div className="overflow-x-auto rounded-[3rem] shadow-2xl bg-white border border-slate-200">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="p-10 text-left bg-slate-50 border-b border-slate-100 w-1/4 text-gray-400 font-black text-sm uppercase">比較項目</th>
                  <th className="p-10 text-center bg-slate-50 border-b border-slate-100 w-1/4 text-slate-400 font-bold">自分で運用</th>
                  <th className="p-10 text-center bg-slate-50 border-b border-slate-100 w-1/4 text-slate-400 font-bold">他社代行</th>
                  <th className="p-10 text-center bg-green-600 text-white w-1/4 text-2xl font-black rounded-t-[2.5rem]">当サービス</th>
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
                    <td className="p-8 font-black border-b border-slate-100 text-slate-700">{row.label}</td>
                    <td className="p-8 text-center text-slate-400 border-b border-slate-100">{row.self}</td>
                    <td className="p-8 text-center text-slate-400 border-b border-slate-100">{row.other}</td>
                    <td className="p-8 text-center font-black text-green-700 bg-green-50/50 border-b border-slate-100 border-x-4 border-green-600/10 text-2xl">{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. 料金プラン（29,800円〜） */}
      <section className="py-32 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black mb-24 text-[#333]">料金プラン</h2>
          <div className="relative group">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-12 py-4 rounded-full font-black text-2xl shadow-2xl z-30 animate-pulse tracking-widest">一番人気</div>
            <div className="bg-[#333] text-white p-12 md:p-24 rounded-[5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-16 opacity-10"><BarChart3 size={200} /></div>
              <p className="text-2xl font-black mb-12 tracking-[0.3em] uppercase text-green-400">運用丸投げプラン</p>
              <div className="mb-16">
                <span className="text-2xl md:text-4xl font-bold opacity-50">月額</span>
                <span className="text-8xl md:text-[10rem] font-black ml-6 text-white leading-none tracking-tighter">29,800</span>
                <span className="text-3xl md:text-5xl font-black ml-6 opacity-50">円〜</span>
              </div>
              <ul className="text-left max-w-2xl mx-auto space-y-8 mb-20 text-xl font-bold">
                {["初期設定・導線の整備", "リッチメニュー制作", "配信設計・コピーライティング", "月次レポート & 改善提案"].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 border-b border-white/10 pb-6"><ShieldCheck className="text-green-500 flex-shrink-0" size={32} /><span>{item}</span></li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-6 bg-green-600 hover:bg-green-500 text-white text-3xl font-black py-10 px-20 rounded-full shadow-2xl transition-all hover:scale-105 w-full md:w-auto">📩 無料相談してみる</a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ（不安の除去） */}
      <section className="py-32 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-24 tracking-tighter">よくあるご質問</h2>
          <div className="space-y-8 text-left">
            {[
              { q: "本当に丸投げで大丈夫ですか？", a: "はい。ヒアリング後は初期設定から運用まで弊社で全て代行いたします。お客様は配信内容の確認（OK出し）をしていただくだけで結構です。" },
              { q: "導入後どのくらいで効果が出ますか？", a: "アカウントの現状によりますが、1〜2ヶ月程度で配信に対する反応率の向上が数字に現れるケースがほとんどです。" },
              { q: "どのような業種に向いていますか？", a: "美容室、飲食店、小売店、スクールなど、リピートが売上の土台となるあらゆるビジネスで高い効果を発揮します。" }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-gray-100 group">
                <h4 className="font-black text-2xl md:text-3xl mb-10 flex gap-6 text-[#333]"><span className="text-green-600 font-black">Q.</span>{faq.q}</h4>
                <div className="flex gap-6 text-xl text-gray-600 font-medium border-t border-gray-50 pt-10"><span className="text-blue-500 font-black flex-shrink-0">A.</span><p className="leading-loose">{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. お客様の声（仮） */}
      <section className="py-32 bg-white px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-24 tracking-tighter text-[#333]">お客様の声</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { role: "美容室オーナー", quote: "「LINEだけで予約が埋まる日が増えました！」", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=300" },
              { role: "飲食店店主", quote: "「クーポン配信でリピートが+38%アップ」", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
              { role: "小売店オーナー", quote: "「自分でやっていた時と反応率が10倍違います」", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" }
            ].map((voice, i) => (
              <div key={i} className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100 text-center hover:bg-white hover:shadow-2xl transition-all duration-700 group border-b-8 border-b-transparent hover:border-b-green-500">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-10 border-8 border-white shadow-xl group-hover:scale-110 transition-transform"><Image src={voice.img} alt={voice.role} fill className="object-cover" /></div>
                <p className="text-green-600 font-black text-sm mb-6 tracking-[0.2em] uppercase">{voice.role}</p>
                <p className="text-3xl font-black leading-snug text-[#333] mb-8">{voice.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. クロージング（決断を後押し） */}
      <section className="py-48 bg-[#333] text-white px-4 overflow-hidden relative text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-green-400 font-black text-2xl md:text-4xl mb-12 tracking-[0.3em]">＼ 行動した人から、売上が変わっています ／</p>
          <h2 className="text-4xl md:text-8xl font-black mb-16 leading-[1.2] tracking-tighter">専門知識ゼロで始められる。<br />人手不足でも売上アップできる。</h2>
          <p className="text-2xl md:text-4xl font-bold text-gray-400 mb-20 leading-relaxed max-w-4xl mx-auto">本業に集中するためにも、今すぐ仕組み化を。</p>
          <a href="#contact" className="inline-flex items-center gap-6 bg-green-600 hover:bg-green-500 text-white text-3xl font-black py-10 px-20 rounded-full shadow-2xl transition-all hover:scale-105 w-full md:w-auto">🚀 まずは話だけ聞いてみたい</a>
        </div>
      </section>

      {/* 14. CTA & Footer */}
      <footer className="bg-white pt-48 pb-20 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-32">
            <div>
              <h3 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">無料相談予約</h3>
              <p className="text-2xl text-gray-500 font-bold mb-16 leading-relaxed">あなたのビジネスに最適なLINE活用プランをご提案します。現状診断も無料で行っております。</p>
              <div className="space-y-8">
                <a href="#" className="flex items-center gap-8 p-10 bg-gray-50 rounded-[3rem] border border-gray-100 group hover:bg-green-50 transition-all shadow-sm">
                  <div className="bg-green-600 text-white p-6 rounded-[2rem] group-hover:scale-110 transition-transform shadow-lg"><MessageCircle size={48} /></div>
                  <div className="font-black text-3xl text-[#333]">公式LINEで相談する</div>
                </a>
              </div>
            </div>
            <div className="bg-[#333] p-12 md:p-20 rounded-[5rem] shadow-2xl text-white">
              <form className="space-y-8">
                <div><label className="block text-xs font-black text-gray-500 mb-4 uppercase tracking-widest">お名前</label><input type="text" className="w-full bg-white/5 border border-white/10 p-8 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-green-500 text-xl font-bold transition-all placeholder:text-gray-700" placeholder="山田 太郎" /></div>
                <div><label className="block text-xs font-black text-gray-500 mb-4 uppercase tracking-widest">会社名 / 屋号</label><input type="text" className="w-full bg-white/5 border border-white/10 p-8 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-green-500 text-xl font-bold transition-all placeholder:text-gray-700" placeholder="株式会社〇〇" /></div>
                <div><label className="block text-xs font-black text-gray-500 mb-4 uppercase tracking-widest">メールアドレス</label><input type="email" className="w-full bg-white/5 border border-white/10 p-8 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-green-500 text-xl font-bold transition-all placeholder:text-gray-700" placeholder="example@mail.com" /></div>
                <div><label className="block text-xs font-black text-gray-500 mb-4 uppercase tracking-widest">ご相談内容</label><textarea className="w-full bg-white/5 border border-white/10 p-8 rounded-[2.5rem] h-48 focus:outline-none focus:ring-4 focus:ring-green-500 text-xl font-bold transition-all placeholder:text-gray-700" placeholder="LINE運用について詳しく聞きたい"></textarea></div>
                <button className="w-full bg-green-600 text-white font-black py-10 rounded-[3rem] text-3xl shadow-2xl hover:bg-green-500 transition-all active:scale-[0.98]">無料相談を申し込む</button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-20 text-center text-gray-400 font-bold uppercase tracking-[0.5em] text-sm">&copy; 2024 LINE STRATEGY EXPERTS. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
}
