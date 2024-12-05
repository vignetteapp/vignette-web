/* eslint-disable react/no-unescaped-entities */
import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { Nav, SEO, Footer } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Button from 'components/Button'

interface FormData {
  username: string
  streaming_duration: string
  platforms: string[]
  platforms_other: string
  experience_rating: string
  ease_of_use: string
  ui_intuitiveness: string
  performance_satisfaction: string
  technical_issues: string
  issues_description: string
  likes: string
  dislikes: string
  recommendation: string
  additional_comments: string
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: ``,
    streaming_duration: ``,
    platforms: [],
    platforms_other: ``,
    experience_rating: ``,
    ease_of_use: ``,
    ui_intuitiveness: ``,
    performance_satisfaction: ``,
    technical_issues: ``,
    issues_description: ``,
    likes: ``,
    dislikes: ``,
    recommendation: ``,
    additional_comments: ``,
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    if (type === `checkbox`) {
      setFormData((prev) => ({
        ...prev,
        platforms: checked
          ? [...prev.platforms, value]
          : prev.platforms.filter((item) => item !== value),
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, `feedback-survey`), formData)
      setFormData({
        username: ``,
        streaming_duration: ``,
        platforms: [],
        platforms_other: ``,
        experience_rating: ``,
        ease_of_use: ``,
        ui_intuitiveness: ``,
        performance_satisfaction: ``,
        technical_issues: ``,
        issues_description: ``,
        likes: ``,
        dislikes: ``,
        recommendation: ``,
        additional_comments: ``,
      })
      window.location.href = `/discord`
    } catch (error) {
      console.error(`Error submitting feedback:`, error)
      alert(`Failed to submit feedback. Please try again.`)
    }
  }

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const previousStep = () => setCurrentStep((prev) => prev - 1)

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            {/* Introduction Container */}
            <div className="p-6 border rounded-lg shadow-md mb-6">
              <p className="text-lg text-center">
                Good day! We are gathering feedback for "Vignette Application,"
                a live-streaming platform designed for streamers. The survey
                will take approximately 2–4 minutes to complete.
              </p>
            </div>

            {/* Basic Information Form */}
            <div className="p-6 border rounded-lg shadow-md">
              <fieldset className="space-y-6">
                <legend className="text-xl text-center font-semibold">
                  Basic Information
                </legend>
                <label className="block">
                  <span className="block text-lg font-medium">
                    Streamer Username
                  </span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="block w-full mt-2 p-3 border rounded focus:ring focus:ring-blue-300"
                    placeholder="Enter your username"
                    required
                  />
                </label>
                <div>
                  <p className="text-lg font-medium">
                    How long have you been streaming?
                  </p>
                  <div className="space-y-2 mt-2">
                    {[
                      `Less than 6 months`,
                      `6 months to 1 year`,
                      `1 to 2 years`,
                      `Over 2 years`,
                    ].map((option) => (
                      <label key={option} className="block">
                        <input
                          type="radio"
                          name="streaming_duration"
                          value={option}
                          checked={formData.streaming_duration === option}
                          onChange={handleChange}
                          className="mr-2"
                          required
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              </fieldset>
            </div>
          </>
        )

      case 2: // Streaming Platforms
        return (
          <div className="p-6 border rounded-lg shadow-md">
            <fieldset className="space-y-6">
              <legend className="text-xl text-center font-semibold">
                Streaming Platforms
              </legend>
              <p className="text-lg font-medium">
                What platform(s) do you stream on? (Check all that apply)
              </p>
              <div className="space-y-2 mt-2">
                {[`Twitch`, `YouTube Live`, `Facebook Gaming`, `TikTok`].map(
                  (platform) => (
                    <label key={platform} className="block">
                      <input
                        type="checkbox"
                        name="platforms"
                        value={platform}
                        checked={formData.platforms.includes(platform)}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {platform}
                    </label>
                  ),
                )}
                <label className="block">
                  <span className="mr-2">Other:</span>
                  <input
                    type="text"
                    name="platforms_other"
                    value={formData.platforms_other}
                    onChange={handleChange}
                    className="p-2 border rounded focus:ring focus:ring-blue-300"
                    placeholder="Specify other platforms"
                  />
                </label>
              </div>
            </fieldset>
          </div>
        )
      case 3: // General Experience
        return (
          <div className="p-6 border rounded-lg shadow-md">
            <fieldset className="space-y-6">
              <legend className="text-xl text-center font-semibold">
                General Experience
              </legend>
              {[
                {
                  question: `How would you rate your overall experience with the application?`,
                  name: `experience_rating`,
                  options: [
                    `Excellent`,
                    `Good`,
                    `Neutral`,
                    `Poor`,
                    `Very Poor`,
                  ],
                },
                {
                  question: `How easy is it to use the application for streaming?`,
                  name: `ease_of_use`,
                  options: [
                    `Very easy`,
                    `Easy`,
                    `Neutral`,
                    `Difficult`,
                    `Very difficult`,
                  ],
                },
                {
                  question: `How intuitive is the user interface (UI)?`,
                  name: `ui_intuitiveness`,
                  options: [
                    `Very intuitive`,
                    `Somewhat intuitive`,
                    `Neutral`,
                    `Somewhat difficult`,
                    `Very difficult`,
                  ],
                },
              ].map((q) => (
                <div key={q.name}>
                  <p className="text-lg font-medium">{q.question}</p>
                  <div className="space-y-2 mt-2">
                    {q.options.map((option) => (
                      <label key={option} className="block">
                        <input
                          type="radio"
                          name={q.name}
                          value={option}
                          checked={
                            formData[q.name as keyof FormData] === option
                          }
                          onChange={handleChange}
                          className="mr-2"
                          required
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </fieldset>
          </div>
        )
      case 4: // Performance Section
        return (
          <div className="p-6 border rounded-lg shadow-md">
            <fieldset className="space-y-6">
              <legend className="text-xl text-center font-semibold">
                Performance
              </legend>
              <p className="text-lg font-medium">
                How satisfied are you with the performance of the application?
              </p>
              <div className="space-y-2 mt-2">
                {[
                  `Very satisfied`,
                  `Satisfied`,
                  `Neutral`,
                  `Unsatisfied`,
                  `Very unsatisfied`,
                ].map((option) => (
                  <label key={option} className="block">
                    <input
                      type="radio"
                      name="performance_satisfaction"
                      value={option}
                      checked={formData.performance_satisfaction === option}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
              <p className="text-lg font-medium">
                Have you encountered any technical issues?
              </p>
              <div className="space-y-2 mt-2">
                {[`Yes`, `No`].map((option) => (
                  <label key={option} className="block">
                    <input
                      type="radio"
                      name="technical_issues"
                      value={option}
                      checked={formData.technical_issues === option}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    {option}
                  </label>
                ))}
              </div>
              {formData.technical_issues === `Yes` && (
                <label className="block mt-4">
                  <span className="block text-lg font-medium">
                    Describe the issue(s):
                  </span>
                  <textarea
                    name="issues_description"
                    value={formData.issues_description}
                    onChange={handleChange}
                    className="block w-full mt-2 p-3 border rounded focus:ring focus:ring-blue-300"
                    placeholder="Describe the issue"
                  ></textarea>
                </label>
              )}
            </fieldset>
          </div>
        )
      case 5: // Suggestions & Final Thoughts
        return (
          <div className="p-6 border rounded-lg shadow-md">
            <fieldset className="space-y-6">
              <legend className="text-xl text-center font-semibold">
                Suggestions & Final Thoughts
              </legend>

              {/* What do you like most */}
              <label className="block">
                <span className="block text-lg font-medium">
                  What do you like most about the application?
                </span>
                <textarea
                  name="likes"
                  value={formData.likes}
                  onChange={handleChange}
                  className="block w-full mt-2 p-3 border rounded focus:ring focus:ring-blue-300"
                  placeholder="Share your thoughts"
                  required
                ></textarea>
              </label>

              {/* What do you dislike */}
              <label className="block">
                <span className="block text-lg font-medium">
                  What do you dislike about the application?
                </span>
                <textarea
                  name="dislikes"
                  value={formData.dislikes}
                  onChange={handleChange}
                  className="block w-full mt-2 p-3 border rounded focus:ring focus:ring-blue-300"
                  placeholder="Share your feedback"
                  required
                ></textarea>
              </label>

              {/* Would you recommend */}
              <p className="text-lg font-medium">
                Would you recommend this application to other streamers?
              </p>
              <div className="space-y-2 mt-2">
                {[`Yes`, `No`, `Maybe`].map((recommendation) => (
                  <label key={recommendation} className="block">
                    <input
                      type="radio"
                      name="recommendation"
                      value={recommendation}
                      checked={formData.recommendation === recommendation}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    {recommendation}
                  </label>
                ))}
              </div>

              {/* Additional Comments */}
              <label className="block">
                <span className="block text-lg font-medium">
                  Any other comments or suggestions?
                </span>
                <textarea
                  name="additional_comments"
                  value={formData.additional_comments}
                  onChange={handleChange}
                  className="block w-full mt-2 p-3 border rounded focus:ring focus:ring-blue-300"
                  placeholder="Share your comments"
                ></textarea>
              </label>
            </fieldset>
          </div>
        )
      default:
        return null
    }
  }
  return (
    <>
      <Nav />
      <SEO title="Feedback Survey" />
      <div className="mx-auto mt-12 max-w-4xl px-6">
        <h1 className="gradient-primary bg-gradient-to-br bg-clip-text text-6xl font-bold text-transparent text-center mb-4 pt-12">
          Streamer Application Feedback Survey
        </h1>
        {renderStep()}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button
              size="large"
              onClick={previousStep}
              className="px-8 py-3 font-medium rounded-md"
            >
              Previous
            </Button>
          )}
          {currentStep < 5 ? (
            <Button
              size="large"
              onClick={nextStep}
              className="px-8 py-3 font-medium rounded-md"
            >
              Next
            </Button>
          ) : (
            <Button
              size="large"
              onClick={handleSubmit}
              className="px-8 py-3 font-medium rounded-md"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

const FeedbackSurveyPage: NextPage = () => {
  return <FeedbackForm />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        `feedback-survey`,
        `nav`,
        `common`,
      ])),
    },
    revalidate: 10,
  }
}

export default FeedbackSurveyPage
