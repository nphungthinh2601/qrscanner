"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/providers/language-provider"

export default function PolicyPage() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("policy.title")}</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t("policy.privacy.title")}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Last updated: April 6, 2025</p>

              <p>
                This Privacy Policy describes how VNDev Labs collects, uses, and protects information when you use the
                Quick QR Scanner application. We are committed to protecting your privacy and only collect information
                necessary to provide the best service.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">1. Information Collection</h3>
              <p>We only collect information necessary to provide our services. This information may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (device type, operating system)</li>
                <li>App usage data (frequency of use, features used)</li>
                <li>QR code data (if you save it)</li>
              </ul>
              <p>
                We do not collect personal information such as names, addresses, or phone numbers unless you actively
                provide it to us when contacting support.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2. Use of Information</h3>
              <p>The collected information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Analyze usage trends to enhance user experience</li>
                <li>Troubleshoot issues and provide technical support</li>
                <li>Develop new features based on user behavior and preferences</li>
                <li>Ensure the security and stability of our application</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">3. Information Sharing</h3>
              <p>
                We do not sell, trade, or transfer your personal information to third parties. This does not include
                trusted third parties who assist us in operating our application, as long as these parties agree to keep
                this information confidential.
              </p>
              <p>
                We may share information when we believe disclosure is necessary to comply with the law, enforce our
                policies, or protect our or others' rights, property, or safety.
              </p>
              <p>
                In the event of a merger, acquisition, or asset sale, user information may be transferred. We will
                notify users via prominent notice on our application of any change in ownership or uses of personal
                information.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">4. Data Security</h3>
              <p>
                We implement reasonable security measures to protect your information. However, no method of
                transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to use
                commercially acceptable means to protect your personal information, we cannot guarantee absolute
                security.
              </p>
              <p>
                We use industry-standard encryption techniques and regularly review our security practices to ensure
                your data remains protected. Any sensitive information is stored in secure databases with restricted
                access.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">5. User Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal information. You can manage most of your
                data directly through the application settings. For additional assistance, please contact us at
                quickqrscanapp@gmail.com.
              </p>
              <p>
                You may opt out of any future contacts from us at any time. You can also request that we delete any
                personal information we hold about you.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">6. Third-Party Services</h3>
              <p>
                Our application may use third-party services that collect information used to identify you. These
                third-party services have their own privacy policies addressing how they use such information.
              </p>
              <p>
                We recommend reviewing the privacy policies of any third-party services linked from our application. We
                have no control over and assume no responsibility for the content, privacy policies, or practices of any
                third-party sites or services.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">7. Children's Privacy</h3>
              <p>
                Our application is not intended for use by children under the age of 13. We do not knowingly collect
                personal information from children under 13. If we discover that a child under 13 has provided us with
                personal information, we will immediately delete this from our servers. If you are a parent or guardian
                and you are aware that your child has provided us with personal information, please contact us.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">8. Policy Changes</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on the application. You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">9. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at quickqrscanapp@gmail.com.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("policy.terms.title")}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Last updated: April 6, 2025</p>

              <p>
                By accessing or using the Quick QR Scanner application, you agree to comply with and be bound by the
                following terms and conditions. Please read these terms carefully before using our application.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">1. Acceptance of Terms</h3>
              <p>
                By using the Quick QR Scanner application, you agree to these Terms of Use. If you do not agree to any
                of these terms, please do not use the application.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2. Intellectual Property Rights</h3>
              <p>
                The Quick QR Scanner application and all content, including but not limited to text, graphics, logos,
                and software, are owned by VNDev Labs and are protected by intellectual property laws.
              </p>
              <p>
                The name "Quick QR Scanner," the logo, and all related product and service names, design marks, and
                slogans are trademarks of VNDev Labs. You must not use such marks without the prior written permission
                of VNDev Labs.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">3. Use License</h3>
              <p>
                You have the right to use the Quick QR Scanner application for personal and non-commercial purposes. You
                are not permitted to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Copy, modify, distribute, or create derivative works from the application without written consent from
                  VNDev Labs
                </li>
                <li>
                  Decompile, reverse engineer, disassemble, or attempt to derive the source code of the application
                </li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>
                  Use the application for any commercial purpose, or for any public display (commercial or
                  non-commercial) without permission
                </li>
                <li>Attempt to bypass any security measures or access restrictions implemented in the application</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by VNDev Labs at any time.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">4. User Accounts</h3>
              <p>
                Some features of the application may require you to create an account. You are responsible for
                maintaining the confidentiality of your account information, including your password, and for all
                activities that occur under your account. You agree to notify us immediately of any unauthorized use of
                your account or any other breach of security.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">5. User Content</h3>
              <p>
                Any content you create, upload, or store using our application remains your property. However, by
                uploading or creating content using our application, you grant VNDev Labs a worldwide, non-exclusive,
                royalty-free license to use, reproduce, adapt, publish, and distribute such content for the purpose of
                providing and improving our services.
              </p>
              <p>
                You are solely responsible for the content you create or share through our application. Content must not
                be illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">6. Limitation of Liability</h3>
              <p>
                VNDev Labs shall not be liable for any damages arising from the use or inability to use the Quick QR
                Scanner application. This includes but is not limited to direct, indirect, incidental, punitive, and
                consequential damages.
              </p>
              <p>
                We do not guarantee that the application will be secure or free from bugs or viruses. You are
                responsible for configuring your device and ensuring it has suitable virus protection software.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">7. Disclaimer</h3>
              <p>
                The materials on VNDev Labs's application are provided on an 'as is' basis. VNDev Labs makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                VNDev Labs does not warrant or make any representations concerning the accuracy, likely results, or
                reliability of the use of the materials on its application or otherwise relating to such materials or on
                any sites linked to this application.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">8. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Vietnam, and you
                irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">9. Changes to Terms</h3>
              <p>
                VNDev Labs reserves the right to modify these Terms of Use at any time. Changes will be effective
                immediately upon posting on the application. You are responsible for regularly reviewing these Terms.
                Your continued use of the application after any changes indicates your acceptance of the modified Terms.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">10. Termination</h3>
              <p>
                We may terminate or suspend your access to our application immediately, without prior notice or
                liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon
                termination, your right to use the application will immediately cease.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">11. Contact</h3>
              <p>
                If you have any questions or concerns about these Terms of Use, please contact us at
                quickqrscanapp@gmail.com.
              </p>
            </div>
          </section>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} VNDev Labs. All Rights Reserved.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

