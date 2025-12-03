import React from "react";
import { useTranslation } from "react-i18next";
// تم حذف مكتبة framer-motion لتحسين الأداء
// import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Code,
  Award,
  Lightbulb,
  Briefcase,
  Cpu,
  LayoutDashboard,
  Code2,
  Smartphone,
} from "lucide-react";

// يتم حذف جميع تعريفات المتغيرات الخاصة بـ motion (containerVariants, itemVariants, cardVariants)

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      number: "3+",
      label: t("about.stats.experience"),
      icon: Briefcase,
      delay: 0.5, // تم الاحتفاظ بهدف التنظيم، لكن لن يُستخدم
      color: "text-purple-600",
      hoverColor: "text-purple-500",
      bgColor: "bg-purple-100", // أضفنا لون خلفية لتناسق التأثير
    },
    {
      number: "20+",
      label: t("about.stats.projects"),
      icon: Code,
      delay: 0.7, // تم الاحتفاظ بهدف التنظيم، لكن لن يُستخدم
      color: "text-green-600",
      hoverColor: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      number: "100%",
      label: t("about.stats.dedication"),
      icon: Award,
      delay: 0.9, // تم الاحتفاظ بهدف التنظيم، لكن لن يُستخدم
      color: "text-red-600",
      hoverColor: "text-red-500",
      bgColor: "bg-red-100",
    },
  ];

  const skills = [
    { name: t("about.skills.react"), icon: Cpu, color: "text-blue-500" },
    {
      name: t("about.skills.nextjs"),
      icon: LayoutDashboard,
      color: "text-gray-800",
    },
    { name: t("about.skills.tailwind"), icon: Code2, color: "text-cyan-500" },
    {
      name: t("about.skills.responsive"),
      icon: Smartphone,
      color: "text-purple-500",
    },
  ];

  const personalInfo = [
    {
      icon: MapPin,
      title: t("about.personal.location"),
      desc: t("about.personal.locationValue"),
      iconColor: "text-red-600",
      bgColor: "bg-red-100",
      hoverBgColor: "bg-red-200",
    },
    {
      icon: GraduationCap,
      title: t("about.personal.education"),
      desc: t("about.personal.educationValue"),
      iconColor: "text-gray-800",
      bgColor: "bg-gray-100",
      hoverBgColor: "bg-gray-200",
    },
    {
      icon: Lightbulb,
      title: t("about.personal.specialization"),
      desc: t("about.personal.specializationValue"),
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-100",
      hoverBgColor: "bg-yellow-200",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements - تم حذف الرسوم المتحركة لـ motion */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* تم استبدال motion.div بـ div عادي وحذف الـ variants والـ initial/whileInView */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* تم استبدال motion.div بـ div عادي وحذف الـ variants */}
            <div>
              {/* تم استبدال motion.h2 بـ h2 عادي */}
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {t("about.title")}
              </h2>
              {/* تم استبدال motion.div بـ div عادي وحذف الـ motion props */}
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>{t("about.description.p1")}</p>
                <p>{t("about.description.p2")}</p>
                <p>{t("about.description.p3")}</p>
              </div>
            </div>

            {/* personalInfo section */}
            <div className="space-y-6">
              {personalInfo.map((item, index) => (
                <div
                  key={index}
                  // تطبيق تأثير التمرير (Hover Effect) باستخدام Tailwind CSS
                  className={`flex items-center space-x-4 rtl:space-x-reverse p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 cursor-pointer group 
                            transition-all duration-300 ease-in-out 
                            hover:scale-[1.02] hover:translate-y-[-5px] hover:shadow-xl`}
                >
                  {/* تم حذف motion.div واستبداله بـ div عادي وإزالة الـ motion props */}
                  <div
                    className={`p-3 ${item.bgColor} rounded-lg group-hover:${item.hoverBgColor} transition-colors`}
                  >
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills and Stats */}
          {/* تم استبدال motion.div بـ div عادي وحذف الـ variants */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50"
              // تم حذف variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t("about.skillsTitle")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    // تطبيق تأثير التمرير (Hover Effect) باستخدام Tailwind CSS
                    className={`flex items-center space-x-3 p-4 bg-gray-50 rounded-lg 
                              transition-transform duration-300 ease-in-out
                              hover:bg-gray-100 hover:scale-[1.05]`}
                  >
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    <span className="font-medium text-gray-800">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  // تطبيق تأثير التمرير (Hover Effect) باستخدام Tailwind CSS
                  className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 cursor-pointer group text-center 
                            transition-all duration-300 ease-in-out
                            hover:scale-[1.05] hover:shadow-xl`}
                >
                  {/* تم حذف motion.div واستبداله بـ div عادي وإزالة الـ motion props */}
                  <div className="flex justify-center mb-2 transition-transform duration-300 group-hover:rotate-12">
                    <stat.icon
                      className={`w-6 h-6 ${stat.color} group-hover:${stat.hoverColor} transition-colors`}
                    />
                  </div>
                  {/* تم حذف motion.div واستبداله بـ div عادي وإزالة الـ motion props */}
                  <div
                    className={`text-3xl font-bold ${stat.color} group-hover:${stat.hoverColor} transition-colors`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
