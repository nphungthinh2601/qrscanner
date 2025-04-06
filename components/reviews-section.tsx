"use client"

import { useLanguage } from "@/providers/language-provider"
import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ReviewsSection() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const reviews = [
    // US Users
    {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "This QR scanner is incredibly fast and accurate! I love the customization options for generating my own QR codes. The dark mode is also very easy on the eyes.",
      location: "United States",
      date: "2023-12-15",
    },
    {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Best QR scanner I've used. The history feature is super helpful for keeping track of codes I've scanned. The interface is clean and intuitive.",
      location: "United States",
      date: "2023-11-28",
    },
    {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "Very reliable app for both scanning and generating QR codes. I use it daily for my business and it hasn't let me down yet. Would recommend!",
      location: "United States",
      date: "2024-01-05",
    },
    {
      name: "Alex Thompson",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As a marketing professional, I use this app daily. The ability to customize QR codes with brand colors has been a game-changer for our campaigns.",
      location: "United States",
      date: "2024-03-05",
    },
    {
      name: "Jessica Williams",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I've tried many QR scanners, but this one is by far the best. It's fast, reliable, and the UI is beautiful. The ability to save and organize scanned codes is super helpful.",
      location: "United States",
      date: "2024-02-18",
    },
    {
      name: "Robert Garcia",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "This app has become essential for my small business. I use it to create QR codes for my products, and customers love how easy it is to access information.",
      location: "United States",
      date: "2024-03-22",
    },
    {
      name: "Amanda Cooper",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "Great app with lots of useful features. I particularly like the history function that lets me go back to previously scanned codes. Would be perfect with a few more export options.",
      location: "United States",
      date: "2024-01-30",
    },
    {
      name: "Daniel Martinez",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As a teacher, I use this app to create interactive learning materials. My students scan the codes to access additional resources. It's been a fantastic teaching tool!",
      location: "United States",
      date: "2024-02-05",
    },

    // Vietnamese Users
    {
      name: "Nguyen Van Minh",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Ứng dụng tuyệt vời với giao diện đơn giản và dễ sử dụng. Tôi đặc biệt thích tính năng tùy chỉnh mã QR với màu sắc và logo.",
      location: "Vietnam",
      date: "2023-12-30",
    },
    {
      name: "Tran Thi Lan",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Đây là ứng dụng quét mã QR tốt nhất mà tôi từng dùng. Nó nhanh, chính xác và có nhiều tính năng hữu ích. Tôi dùng nó hàng ngày cho công việc kinh doanh của mình.",
      location: "Vietnam",
      date: "2024-01-15",
    },
    {
      name: "Le Hoang Nam",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "Ứng dụng rất hữu ích cho việc quét và tạo mã QR. Tôi thích chế độ tối và khả năng lưu trữ lịch sử quét. Sẽ hoàn hảo nếu có thêm một vài tùy chọn xuất file.",
      location: "Vietnam",
      date: "2024-02-20",
    },
    {
      name: "Pham Thanh Huong",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Tôi sử dụng ứng dụng này cho cửa hàng nhỏ của mình để tạo mã QR cho thực đơn và thông tin sản phẩm. Khách hàng rất thích sự tiện lợi này!",
      location: "Vietnam",
      date: "2024-03-10",
    },
    {
      name: "Hoang Duc Anh",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Ứng dụng quét mã QR này rất nhanh và chính xác. Tôi đặc biệt thích tính năng tạo mã QR với nhiều tùy chọn màu sắc và hình dạng khác nhau.",
      location: "Vietnam",
      date: "2024-01-25",
    },
    {
      name: "Nguyen Thi Mai",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Tôi là giáo viên và sử dụng ứng dụng này để tạo tài liệu học tập tương tác. Học sinh của tôi quét mã QR để truy cập tài liệu bổ sung. Đây là công cụ giảng dạy tuyệt vời!",
      location: "Vietnam",
      date: "2024-02-28",
    },

    // Other international users
    {
      name: "David Kim",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The multilingual support is fantastic! I can switch between languages easily, and the app works flawlessly in all of them. Great job!",
      location: "South Korea",
      date: "2023-10-17",
    },
    {
      name: "Lisa Patel",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "I appreciate how quickly this app scans codes, even in low light conditions. The haptic feedback is a nice touch too!",
      location: "India",
      date: "2024-02-03",
    },
    {
      name: "Jean Dupont",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "J'utilise cette application tous les jours pour mon travail. La fonction de personnalisation des codes QR est exceptionnelle. Très satisfait !",
      location: "France",
      date: "2023-12-22",
    },
    {
      name: "Hans Müller",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Die App ist sehr schnell und zuverlässig. Ich benutze sie für mein kleines Unternehmen und bin sehr zufrieden mit den Funktionen.",
      location: "Germany",
      date: "2024-01-18",
    },
  ]

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, reviews.length])

  const nextSlide = () => {
    setAutoplay(false)
    setActiveIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setAutoplay(false)
    setActiveIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
  }

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
  }

  return (
    <section id="reviews" className="section-padding bg-muted/50 overflow-hidden">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("reviews.title")}</h2>
          </motion.div>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("reviews.subtitle")}
          </motion.p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-xl p-6 shadow-md border border-border"
          >
            <div className="absolute top-4 right-4 text-primary opacity-30">
              <Quote className="h-8 w-8" />
            </div>
            <div className="flex items-center mb-4">
              <Image
                src={reviews[activeIndex].avatar || "/placeholder.svg"}
                alt={reviews[activeIndex].name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">{reviews[activeIndex].name}</p>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < reviews[activeIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {reviews[activeIndex].location} • {formatDate(reviews[activeIndex].date)}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">{reviews[activeIndex].text}</p>
          </motion.div>
          <div className="flex justify-center mt-4 gap-2">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setActiveIndex(index)
                  setAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-6" : "bg-muted"
                }`}
                aria-label={`Go to review ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / 3)}%)`,
                width: `${(reviews.length / 3) * 100}%`,
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-1/3 px-3" style={{ minWidth: `${100 / 3}%` }}>
                  <motion.div
                    className="bg-background rounded-xl p-6 shadow-md border border-border h-full relative overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.div
                      className="absolute top-4 right-4 text-primary opacity-30"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Quote className="h-8 w-8" />
                    </motion.div>
                    <div className="flex items-center mb-4 relative z-10">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <p className="font-semibold">{review.name}</p>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <Star
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                                  }`}
                                />
                              </motion.div>
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {review.location} • {formatDate(review.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground relative z-10">{review.text}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setActiveIndex(index * 3)
                  setAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(activeIndex / 3) === index ? "bg-primary w-6" : "bg-muted"
                }`}
                aria-label={`Go to review group ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Add Review CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4 text-muted-foreground">{t("reviews.cta.text")}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all"
            >
              {t("reviews.cta.button")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

