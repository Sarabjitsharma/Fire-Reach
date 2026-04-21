import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bot,
  Briefcase,
  Building2,
  Clock3,
  Database,
  Flame,
  Globe2,
  LineChart,
  Radar,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Cpu,
  Monitor,
  Zap,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import FireParticles from '../components/FireParticles'
import RotatingGlobe from '../components/RotatingGlobe'
import GlowCard from '../components/GlowCard'
import { InteractiveRobotSpline } from '../components/ui/interactive-3d-robot'

const TICKER_ITEMS = [
  "Found Apple.inc signals", "Generating outreach for Tesla", "Verified 412 contacts at Microsoft",
  "Scoring timing for Stripe", "Ranking global universe", "Discovered 14 leadership changes",
  "Tech stack fit verified: 98%", "Ready-to-send drafts: 64", "Signal confidence: 99.2%"
]

const AGENTS = [
  {
    step: '01',
    icon: Target,
    name: 'Company Discovery',
    desc: 'Scans your ICP and builds a ranked market universe in real-time.',
    metric: '1,200+ companies scanned',
  },
  {
    step: '02',
    icon: Radar,
    name: 'Signal Harvesting',
    desc: 'Streams hiring, funding, product, and leadership moves across channels.',
    metric: '6 signal families',
  },
  {
    step: '03',
    icon: BadgeCheck,
    name: 'Signal Verification',
    desc: 'Cross-checks every trigger through multi-source confidence scoring.',
    metric: 'False positives filtered',
  },
  {
    step: '04',
    icon: LineChart,
    name: 'ICP Scoring',
    desc: 'Assigns weighted fit scores for teams, timing, and business momentum.',
    metric: '0-100 fit index',
  },
  {
    step: '05',
    icon: Building2,
    name: 'Account Ranking',
    desc: 'Builds a fresh priority stack so your team hits strongest accounts first.',
    metric: 'Top 25 surfaced',
  },
  {
    step: '06',
    icon: Users,
    name: 'Contact Finding',
    desc: 'Finds decision makers and validates business emails before outreach.',
    metric: 'Role-mapped contacts',
  },
  {
    step: '07',
    icon: Send,
    name: 'Outreach Generation',
    desc: 'Writes context-rich outbound emails aligned to each account signal.',
    metric: 'Ready-to-send drafts',
  },
]

const PLANS = [
  {
    id: 'starter', name: 'Starter', price: 'Rs 299', yearlyPrice: 'Rs 2,499', period: '/month', credits: 150,
    features: ['150 credits/month', 'Manual mode only', '5 contacts per company', 'Email support'],
    highlight: false,
  },
  {
    id: 'growth', name: 'Growth', price: 'Rs 599', yearlyPrice: 'Rs 4,999', period: '/month', credits: 400,
    features: ['400 credits/month', 'Manual + Automatic mode', 'Priority support', 'Export to CSV'],
    highlight: true, badge: 'Most Popular',
  },
  {
    id: 'scale', name: 'Scale', price: 'Rs 1,299', yearlyPrice: 'Rs 10,999', period: '/month', credits: 1200,
    features: ['1200 credits/month', 'Unlimited contacts', 'API access', 'Team seats (5 users)'],
    highlight: false,
  },
]

function SectionHeading({ eyebrow, title, subtitle, centered = true }) {
  return (
    <div className={`neo-heading-wrap ${centered ? 'text-center' : ''}`}>
      <p className="neo-eyebrow">{eyebrow}</p>
      <h2 className="neo-heading">{title}</h2>
      {subtitle && <p className="neo-subheading mx-auto max-w-2xl">{subtitle}</p>}
    </div>
  )
}

export default function Landing() {
  const { isAuthenticated } = useAuth()
  const [isYearly, setIsYearly] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode'
  const getStartedPath = isAuthenticated ? '/dashboard' : '/signup'

  const currentAgent = AGENTS[activeStep]

  return (
    <div className="landing-page landing-neo">
      <Navbar transparent />

      {/* ── IMMERSIVE HERO SECTION ── */}
      <section className="neo-hero-centered">
        <div className="neo-hero-bg" aria-hidden>
          <FireParticles />
          <div className="neo-hero-grid" />
          <div className="neo-hero-gradient" />
          <div className="absolute inset-0 opacity-20 flex items-center justify-center -z-10 bg-black/40 blur-3xl">
              <RotatingGlobe width={800} height={800} />
          </div>
        </div>

        <div className="container neo-hero-shell">
          <motion.div
            className="neo-hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="neo-chip mx-auto">
              <Sparkles size={14} />
              The Next Evolution of Outbound Automation
            </p>
            <h1 className="neo-title">
              Ship Outbound with
              <span className="block">Agentic Precision.</span>
            </h1>
            <p className="neo-lead">
              FireReach deploys seven specialized agents to discover, verify, rank, 
              and write campaign-ready outbound from live market signals.
            </p>

            <div className="neo-hero-ctas">
              <Link to={getStartedPath} className="btn-primary btn-lg neo-btn-strong">
                Start Workspace - 50 Credits
                <ArrowRight size={16} />
              </Link>
              <button className="btn-ghost btn-lg neo-btn-soft" onClick={() => document.getElementById('bento')?.scrollIntoView({ behavior: 'smooth' })}>
                View Features
              </button>
            </div>
          </motion.div>

          {/* Interactive Hero Asset */}
          <motion.div
            className="neo-command-deck"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="neo-robot-shell" data-glow>
               <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="robot-scene" />
               <div className="neo-mini-grid absolute bottom-6 left-6 right-6 z-20">
                  <div className="neo-mini-card backdrop-blur-md" data-glow>
                    <Search size={16} />
                    <div><p>Companies Found</p><strong>1,200+</strong></div>
                  </div>
                  <div className="neo-mini-card backdrop-blur-md" data-glow>
                    <ShieldCheck size={16} />
                    <div><p>Verification Confidence</p><strong>99.4%</strong></div>
                  </div>
                  <div className="neo-mini-card backdrop-blur-md" data-glow>
                    <Send size={16} />
                    <div><p>Drafts Generated</p><strong>642</strong></div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LIVE SIGNAL TICKER ── */}
      <div className="neo-ticker">
        <div className="neo-ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((text, i) => (
            <div key={i} className="neo-ticker-item">
              <span className="ticker-dot" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── BENTO GRID FEATURES ── */}
      <section id="bento" className="neo-section relative">
        <div className="container">
          <SectionHeading 
            eyebrow="Intelligence Engine" 
            title="Smarter infrastructure for modern teams."
            subtitle="Our agents don't just send emails. They research, verify, and strategize like your best SDRs."
          />

          <div className="neo-bento-grid">
            <GlowCard className="bento-item bento-1">
               <div className="bento-content">
                  <div className="bento-icon-wrap"><Target size={24} /></div>
                  <div>
                    <h3 className="bento-title">Autonomous Market Discovery</h3>
                    <p className="bento-text">While traditional tools rely on static lists, FireReach scans the live web to find companies that match your ICP based on real-time activity.</p>
                  </div>
               </div>
            </GlowCard>

            <GlowCard className="bento-item bento-2">
               <div className="bento-content">
                  <div className="bento-icon-wrap"><Radar size={24} /></div>
                  <div>
                    <h3 className="bento-title">Live Signal Stream</h3>
                    <p className="bento-text">Monitor leadership hires, funding rounds, and technical stack changes across 15+ sources simultaneously.</p>
                  </div>
               </div>
            </GlowCard>

            <GlowCard className="bento-item bento-3">
               <div className="bento-content">
                  <div className="bento-icon-wrap"><Cpu size={24} /></div>
                  <div>
                    <h3 className="bento-title">Agentic Orchestration</h3>
                    <p className="bento-text">Seven specialized AI agents work in a serial pipeline, passing verified data from one stage to the next.</p>
                  </div>
               </div>
            </GlowCard>

            <GlowCard className="bento-item bento-4">
               <div className="bento-content">
                  <div className="bento-icon-wrap"><BadgeCheck size={24} /></div>
                  <div>
                    <h3 className="bento-title">Zero-Hallucination Verification</h3>
                    <p className="bento-text">Every signal is cross-referenced against multiple data providers to ensure your outreach is always grounded in truth.</p>
                  </div>
               </div>
            </GlowCard>

            <div className="bento-item bento-5">
               <div className="neo-stats-grid">
                 <div className="stat-item">
                    <span className="stat-value">58s</span>
                    <span className="stat-label">Avg. Campaign Setup</span>
                 </div>
                 <div className="stat-item">
                    <span className="stat-value">15+</span>
                    <span className="stat-label">Data Integrations</span>
                 </div>
                 <div className="stat-item">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Verified Emails</span>
                 </div>
                 <div className="stat-item">
                    <span className="stat-value">7</span>
                    <span className="stat-label">Autonomous Agents</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE AGENT WALKER ── */}
      <section className="neo-section neo-section-muted">
        <div className="container">
          <SectionHeading 
            eyebrow="The Workflow" 
            title="Deep dive into the 7-agent pipeline."
            subtitle="Click a stage below to see how each agent contributes to your campaign engine."
          />

          <div className="neo-walker-wrap">
            <div className="walker-stages">
              {AGENTS.map((agent, i) => (
                <button 
                  key={agent.step} 
                  className={`walker-stage ${activeStep === i ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <span className="walker-num">{agent.step}</span>
                  <span className="walker-name">{agent.name}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="walker-detail"
              >
                <div className="walker-detail-icon">
                  {currentAgent && <currentAgent.icon size={36} />}
                </div>
                <div className="walker-detail-info">
                  <h3>{currentAgent?.name}</h3>
                  <p>{currentAgent?.desc}</p>
                  <div className="neo-agent-metric">Agent KPI: {currentAgent?.metric}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section id="pricing" className="neo-section">
        <div className="container">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple, scalable credit-based pricing."
            subtitle="Switch to yearly billing to save 30% on your automation engine."
          />

          <div className="neo-switch-wrap mb-12">
            <div className="neo-switch">
              <button className={`neo-switch-opt ${!isYearly ? 'active' : ''}`} onClick={() => setIsYearly(false)}>Monthly</button>
              <button className={`neo-switch-opt ${isYearly ? 'active' : ''}`} onClick={() => setIsYearly(true)}>Yearly</button>
            </div>
          </div>

          <div className="neo-pricing-grid">
            {PLANS.map((plan) => (
              <GlowCard key={plan.id} className={`neo-pricing-card ${plan.highlight ? 'neo-pricing-highlight' : ''}`}>
                {plan.badge && <div className="neo-pricing-badge">{plan.badge}</div>}
                <h3>{plan.name}</h3>
                <div className="neo-pricing-price">
                  <span>{isYearly ? plan.yearlyPrice : plan.price}</span>
                  <small>{isYearly ? '/year' : '/month'}</small>
                </div>
                <p className="neo-pricing-credits">{plan.credits} credits/mo</p>
                <ul className="neo-pricing-features">
                  {plan.features.map((f, j) => (
                    <li key={j}><BadgeCheck size={14} className="text-primary" />{f}</li>
                  ))}
                </ul>
                <Link to={getStartedPath} className={`btn-full ${plan.highlight ? 'btn-primary neo-btn-strong' : 'btn-outline neo-btn-outline'}`}>
                  Join {plan.name}
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="neo-final-cta pb-32">
        <div className="container">
          <motion.div 
            className="neo-final-card text-center flex flex-col items-center" 
            data-glow
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="neo-chip mx-auto">
              <Zap size={14} />
              Set up in under 2 minutes
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to scale your outbound?</h2>
            <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
              Join thousands of teams using agentic AI to fill their pipeline with high-quality signals and personalized drafts.
            </p>
            <Link to={getStartedPath} className="btn-primary btn-lg neo-btn-strong">
              Launch Free Workspace
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer neo-footer">
        <div className="container footer-inner text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            <div className="footer-left">
              <span className="logo-gradient text-3xl">FireReach</span>
              <p className="footer-tagline">ICP to Inbox. Agentic Automation.</p>
            </div>
            <div className="footer-links flex gap-12">
               <div className="flex flex-col gap-3">
                  <h4 className="text-white font-bold mb-2">Product</h4>
                  <a href="#bento" className="text-text-muted hover:text-primary">Features</a>
                  <a href="#how-it-works" className="text-text-muted hover:text-primary">Workflow</a>
                  <a href="#pricing" className="text-text-muted hover:text-primary">Pricing</a>
               </div>
               <div className="flex flex-col gap-3">
                  <h4 className="text-white font-bold mb-2">Company</h4>
                  <Link to="/login" className="text-text-muted hover:text-primary">Login</Link>
                  <Link to="/signup" className="text-text-muted hover:text-primary">Sign Up</Link>
               </div>
            </div>
          </div>
          <div className="footer-bottom mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between text-text-dim text-sm">
            <p>© 2026 FireReach. All rights reserved.</p>
            <p>Built with ❤️ by the FireReach Team.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
