import "./styles/whats-included.css"

interface FeatureCardProps {
  title: string
  description: string
  className?: string
}

const FeatureCard = ({ title, description, className = "" }: FeatureCardProps) => (
  <div className={`whats-included__card ${className}`}>
    <h3 className="whats-included__card-title">{title}</h3>
    <p className="whats-included__card-text">{description}</p>
  </div>
)

export default function WhatsIncluded() {
  return (
    <section className="whats-included">
      <h2 className="whats-included__title">What's Included?</h2>

      <div className="whats-included__container">
        <FeatureCard
          className="whats-included__card--1"
          title="Expert and Experienced Tutors"
          description="We provide 1:1 virtual tutoring for Mathematics, Sciences, English and Computer Science. Our expert tutors offer homework help, study plans, and preparation for AP exams."
        />

        <FeatureCard
          className="whats-included__card--2"
          title="1:1 Virtual sessions"
          description="We provide 1:1 virtual tutoring for Mathematics, Sciences, English and Computer Science. Our expert tutors offer homework help, study plans, and preparation for AP exams."
        />

        <div className="whats-included__center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(63)-P8BXJMcF5Kd77S90Hh5fagAjEZoHL8.png"
            alt="Student illustration"
            className="whats-included__center-image"
          />
        </div>

        <FeatureCard
          className="whats-included__card--3"
          title="Help with Homework, Study Plan and AP Exams"
          description="We provide virtual tutoring for Mathematics, Sciences, English and Computer Science. Our expert tutors offer homework help, study plans, and preparation for AP exams."
        />

        <FeatureCard
          className="whats-included__card--4"
          title="30 minute Demo Class Available"
          description="A 30-minute free demo for admission classes tutoring is a chance for students to experience our services and ask questions before committing. It may include an overview of course content, test-taking strategies, and sample questions."
        />
      </div>
    </section>
  )
}

