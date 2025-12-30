'use client'

import { useState } from 'react'
import { Bug, Shield, Target, Code, BookOpen, Trophy, ChevronRight, Lock, Database, Globe, Terminal } from 'lucide-react'

export default function Home() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())

  const modules = [
    {
      id: 'intro',
      title: 'বাগ হান্টিং পরিচিতি',
      icon: BookOpen,
      color: 'bg-blue-500',
      lessons: [
        { id: 'what-is', title: 'বাগ হান্টিং কী?', content: 'বাগ হান্টিং বা বাগ বাউন্টি হান্টিং হল একটি প্রক্রিয়া যেখানে সিকিউরিটি রিসার্চাররা ওয়েবসাইট, অ্যাপ্লিকেশন বা সিস্টেমে নিরাপত্তা দুর্বলতা খুঁজে বের করেন এবং সেগুলি রিপোর্ট করেন। কোম্পানিগুলি এই দুর্বলতা খুঁজে পাওয়ার জন্য পুরস্কার প্রদান করে।' },
        { id: 'why', title: 'কেন শিখবেন?', content: 'বাগ হান্টিং শিখলে আপনি: ১) ভালো আয় করতে পারবেন (প্রতি বাগের জন্য $50-$50,000+), ২) সাইবার সিকিউরিটি দক্ষতা বৃদ্ধি পাবে, ৩) নৈতিক হ্যাকিং শিখতে পারবেন, ৪) গ্লোবাল কমিউনিটির অংশ হতে পারবেন।' },
        { id: 'requirements', title: 'প্রয়োজনীয় দক্ষতা', content: 'শুরু করার জন্য প্রয়োজন: ১) বেসিক ওয়েব ডেভেলপমেন্ট (HTML, CSS, JavaScript), ২) HTTP/HTTPS প্রোটোকল বোঝা, ৩) নেটওয়ার্কিং বেসিক, ৪) লিনাক্স কমান্ড লাইন, ৫) ধৈর্য এবং শেখার ইচ্ছা।' },
      ]
    },
    {
      id: 'web-basics',
      title: 'ওয়েব সিকিউরিটি বেসিক',
      icon: Globe,
      color: 'bg-green-500',
      lessons: [
        { id: 'http', title: 'HTTP/HTTPS বোঝা', content: 'HTTP হল Hypertext Transfer Protocol। এটি ক্লায়েন্ট-সার্ভার কমিউনিকেশনের জন্য ব্যবহৃত হয়। মূল মেথডগুলি: GET (ডেটা রিকোয়েস্ট), POST (ডেটা সাবমিট), PUT (আপডেট), DELETE (মুছে ফেলা)। HTTPS হল এনক্রিপ্টেড ভার্সন যা SSL/TLS ব্যবহার করে।' },
        { id: 'cookies', title: 'Cookies এবং Sessions', content: 'Cookies হল ছোট ডেটা ফাইল যা ব্রাউজারে সংরক্ষিত হয়। Session হল সার্ভার-সাইডে ইউজার স্টেট ট্র্যাক করা। সিকিউরিটি ফ্ল্যাগ: HttpOnly (জাভাস্ক্রিপ্ট থেকে এক্সেস রোধ করে), Secure (শুধু HTTPS-এ পাঠায়), SameSite (CSRF আক্রমণ রোধ করে)।' },
        { id: 'auth', title: 'Authentication এবং Authorization', content: 'Authentication = "তুমি কে?" (লগইন), Authorization = "তুমি কী করতে পারো?" (অনুমতি)। কমন মেথড: Basic Auth, Token-based (JWT), OAuth 2.0, Session-based। দুর্বলতা: Weak passwords, Broken access control, Session hijacking।' },
      ]
    },
    {
      id: 'common-vulns',
      title: 'কমন দুর্বলতা',
      icon: Bug,
      color: 'bg-red-500',
      lessons: [
        { id: 'xss', title: 'Cross-Site Scripting (XSS)', content: 'XSS হল যখন আক্রমণকারী ওয়েবসাইটে ম্যালিশাস স্ক্রিপ্ট ইনজেক্ট করে। ৩ ধরন: Reflected (URL-এ), Stored (ডাটাবেসে সংরক্ষিত), DOM-based। উদাহরণ: <script>alert(document.cookie)</script>। প্রতিরোধ: Input validation, Output encoding, CSP headers।' },
        { id: 'sqli', title: 'SQL Injection', content: 'SQL Injection হল যখন আক্রমণকারী SQL কুয়েরিতে ম্যালিশাস কোড ইনজেক্ট করে। উদাহরণ: \' OR 1=1-- যা সব ডেটা রিটার্ন করে। প্রভাব: ডেটা চুরি, ডেটা মুছে ফেলা, authentication bypass। প্রতিরোধ: Prepared statements, Input validation, Least privilege।' },
        { id: 'csrf', title: 'Cross-Site Request Forgery (CSRF)', content: 'CSRF হল যখন আক্রমণকারী ভিকটিমকে দিয়ে অনিচ্ছাকৃত action সম্পন্ন করায়। উদাহরণ: <img src="bank.com/transfer?to=attacker&amount=1000">। প্রতিরোধ: CSRF tokens, SameSite cookies, Origin/Referer header চেক করা।' },
        { id: 'idor', title: 'Insecure Direct Object Reference (IDOR)', content: 'IDOR হল যখন ইউজার অন্য ইউজারের ডেটা এক্সেস করতে পারে শুধু ID পরিবর্তন করে। উদাহরণ: /api/user/123 থেকে /api/user/124। প্রতিরোধ: Authorization চেক, UUID ব্যবহার, Access control implementation।' },
      ]
    },
    {
      id: 'tools',
      title: 'টুলস এবং সেটাপ',
      icon: Terminal,
      color: 'bg-purple-500',
      lessons: [
        { id: 'burp', title: 'Burp Suite', content: 'Burp Suite হল সবচেয়ে জনপ্রিয় ওয়েব সিকিউরিটি টেস্টিং টুল। ফিচার: Proxy (HTTP ট্রাফিক intercept), Repeater (রিকোয়েস্ট modify করা), Intruder (automated attacks), Scanner (vulnerability স্ক্যান)। Community edition ফ্রি।' },
        { id: 'recon', title: 'Reconnaissance টুলস', content: 'Recon টুলস: Subfinder (subdomain খোঁজা), Amass (asset discovery), Nmap (port scanning), Dirsearch (directory bruteforce), WaybackMachine (পুরনো ভার্সন দেখা), Google Dorks (advanced search)।' },
        { id: 'browser', title: 'Browser Developer Tools', content: 'ব্রাউজার DevTools অপরিহার্য: Network tab (HTTP requests দেখা), Console (JavaScript test করা), Elements (HTML/CSS inspect), Application (cookies/storage দেখা), Sources (JavaScript debug করা)। F12 চাপুন open করতে।' },
      ]
    },
    {
      id: 'methodology',
      title: 'হান্টিং মেথডোলজি',
      icon: Target,
      color: 'bg-yellow-500',
      lessons: [
        { id: 'recon-process', title: 'Reconnaissance', content: 'পর্যায় ১: Target selection (scope দেখুন), পর্যায় ২: Subdomain enumeration, পর্যায় ৩: Port scanning, পর্যায় ৪: Technology detection (Wappalyzer), পর্যায় ৫: Content discovery, পর্যায় ৬: Parameter finding। সময় নিন, thorough হন।' },
        { id: 'testing', title: 'Testing এবং Exploitation', content: 'পদক্ষেপ: ১) Functionality বুঝুন, ২) Input points খুঁজুন, ৩) Payloads test করুন, ৪) Bypass করার চেষ্টা করুন, ৫) Proof of Concept তৈরি করুন। Always test safely, কোনো ক্ষতি করবেন না।' },
        { id: 'reporting', title: 'Reporting', content: 'ভালো রিপোর্ট: ১) Clear title, ২) Impact ব্যাখ্যা, ৩) Steps to reproduce, ৪) Proof of concept (screenshot/video), ৫) Suggested fix। Professional ভাষা ব্যবহার করুন, courteous থাকুন।' },
      ]
    },
    {
      id: 'practice',
      title: 'Practice Platforms',
      icon: Trophy,
      color: 'bg-orange-500',
      lessons: [
        { id: 'labs', title: 'Practice Labs', content: 'বিনামূল্যে practice: PortSwigger Web Security Academy (সেরা), HackTheBox (CTF style), TryHackMe (guided learning), PentesterLab (exercises), OWASP WebGoat (intentionally vulnerable)। প্রতিদিন practice করুন।' },
        { id: 'platforms', title: 'Bug Bounty Platforms', content: 'শুরু করার জন্য: HackerOne (largest), Bugcrowd (diverse programs), Intigriti (Europe focused), YesWeHack (global), Synack (invite-only)। Private programs আগে public programs চেষ্টা করুন।' },
        { id: 'tips', title: 'Success Tips', content: 'টিপস: ১) Automated tools-এর উপর নির্ভর করবেন না, ২) Out-of-scope targets এড়িয়ে চলুন, ৩) Duplicates থেকে শিখুন, ৪) Community-তে participate করুন, ৫) Patience রাখুন, ৬) Document everything, ৭) Never give up!।' },
      ]
    },
  ]

  const toggleLesson = (lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev)
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId)
      } else {
        newSet.add(lessonId)
      }
      return newSet
    })
  }

  const progress = modules.reduce((acc, module) => {
    const completed = module.lessons.filter(l => completedLessons.has(l.id)).length
    return acc + completed
  }, 0)

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">Bug Hunting Academy</h1>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">{progress}/{totalLessons}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      {!selectedModule && (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">বাগ হান্টিং শিখুন</h2>
            <p className="text-xl text-gray-300 mb-8">নিরাপত্তা পরীক্ষণ এবং বাগ বাউন্টি হান্টিং-এ সম্পূর্ণ গাইড</p>
            <div className="flex justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-purple-400">{modules.length}</div>
                <div className="text-sm text-gray-300">মডিউল</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-green-400">{totalLessons}</div>
                <div className="text-sm text-gray-300">পাঠ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold text-yellow-400">{Math.round((progress/totalLessons)*100)}%</div>
                <div className="text-sm text-gray-300">সম্পন্ন</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-500"
                style={{ width: `${(progress/totalLessons)*100}%` }}
              />
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module) => {
              const Icon = module.icon
              const completed = module.lessons.filter(l => completedLessons.has(l.id)).length
              const total = module.lessons.length

              return (
                <div
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-500 transition-all cursor-pointer hover:scale-105 hover:bg-white/15"
                >
                  <div className={`${module.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{total} টি পাঠ</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-white/20 rounded-full h-2 w-24 overflow-hidden">
                        <div
                          className="bg-green-400 h-full transition-all"
                          style={{ width: `${(completed/total)*100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-300">{completed}/{total}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Lesson View */}
      {selectedModule && (
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedModule(null)}
            className="mb-6 text-gray-300 hover:text-white flex items-center gap-2"
          >
            ← ফিরে যান
          </button>

          {modules.filter(m => m.id === selectedModule).map(module => {
            const Icon = module.icon
            return (
              <div key={module.id}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`${module.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{module.title}</h2>
                    <p className="text-gray-300">{module.lessons.length} টি পাঠ</p>
                  </div>
                </div>

                <div className="grid gap-6 max-w-4xl">
                  {module.lessons.map((lesson, index) => {
                    const isCompleted = completedLessons.has(lesson.id)
                    return (
                      <div
                        key={lesson.id}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`${isCompleted ? 'bg-green-500' : 'bg-white/20'} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
                              <span className="text-white font-bold">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-3">{lesson.title}</h3>
                              <p className="text-gray-300 leading-relaxed">{lesson.content}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={() => toggleLesson(lesson.id)}
                            className={`${isCompleted ? 'bg-green-500 hover:bg-green-600' : 'bg-purple-500 hover:bg-purple-600'} text-white px-6 py-2 rounded-lg transition-colors`}
                          >
                            {isCompleted ? '✓ সম্পন্ন' : 'সম্পন্ন হিসেবে চিহ্নিত করুন'}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">🛡️ নিরাপত্তা শিক্ষার জন্য তৈরি - নৈতিকভাবে ব্যবহার করুন</p>
            <p className="text-sm">সবসময় অনুমতি সহ টেস্ট করুন এবং দায়িত্বশীলভাবে দুর্বলতা রিপোর্ট করুন</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
