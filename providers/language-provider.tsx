'use client';

import type React from 'react';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ko' | 'vi';

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Expanded translations object with all elements
const translations: Record<Language, Record<string, string>> = {
  en: {
    'hero.tagline':
      'Scan, Generate, Customize - The Ultimate QR Code Solution.',
    'cta.googlePlay': 'Google Play',
    'cta.appStore': 'App Store',
    'features.title': 'Powerful Features',
    'features.subtitle':
      'Discover all the powerful features that make our QR Scanner & Generator the ultimate solution for all your QR code needs.',
    'features.scan': 'Scan & Generate QR Codes',
    'features.scan.description':
      'Quickly scan any QR code or generate custom codes for websites, social media, and more.',
    'features.customize': 'Customize QR Codes',
    'features.customize.description':
      'Make your QR codes stand out with custom colors, shapes, and even add your logo.',
    'features.history': 'History Log',
    'features.history.description':
      'Keep track of all your scanned and generated QR codes with our built-in history log.',
    'features.theme': 'Light/Dark Mode',
    'features.theme.description':
      'Choose between light and dark mode for comfortable scanning in any environment.',
    'features.feedback': 'Haptic Feedback & Sound',
    'features.feedback.description':
      'Enjoy a more interactive experience with haptic feedback and sound notifications.',
    'features.language': 'Multi-language Support',
    'features.language.description':
      'Use the app in your preferred language with our comprehensive multi-language support.',
    'features.interface': 'Simple & Intuitive Interface',
    'features.interface.description':
      'Navigate effortlessly with our clean, intuitive, and user-friendly interface.',
    'screenshots.title': 'App Screenshots',
    'screenshots.subtitle':
      "Take a closer look at our app's sleek design and intuitive interface.",
    'screenshots.alt.home': 'Home Screen',
    'screenshots.alt.scanning': 'Scanning QR Code',
    'screenshots.alt.generator': 'QR Code Generator',
    'screenshots.alt.customization': 'Customization Options',
    'screenshots.alt.history': 'History Log',
    'screenshots.alt.settings': 'Settings Screen',
    'screenshots.alt.darkMode': 'Dark Mode',
    'team.title': 'About the Development Team',
    'team.description':
      'VNDev Labs is a team of passionate developers dedicated to creating innovative and user-friendly applications.',
    'team.longDescription':
      'Our team of experienced developers and designers is passionate about creating innovative mobile applications that solve real-world problems. With a focus on user experience and performance, we strive to deliver products that exceed expectations.',
    'team.experience': 'Years Experience',
    'team.apps': 'Apps Developed',
    'team.users': 'Happy Users',
    'company.title': 'About VNDev Labs',
    'company.description':
      'VNDev Labs is a forward-thinking software development company focused on creating cutting-edge mobile applications.',
    'company.mission':
      "Our mission is to create applications that make people's lives easier and more productive.",
    'company.vision':
      'We believe in continuous innovation, user-centered design, and delivering exceptional quality in everything we do.',
    'reviews.title': 'What Our Users Say',
    'reviews.subtitle':
      "Don't just take our word for it. Here's what our users have to say about Quick QR Scanner & Generator.",
    'reviews.cta.text': 'Love our app? Share your experience with others!',
    'reviews.cta.button': 'Write a Review',
    'cta.download': 'Download the App',
    'cta.subtitle':
      'Join millions of users who trust Quick QR Scanner & Generator for all their QR code needs. Download now and experience the difference!',
    'footer.contact': 'Contact & Support',
    'footer.rights': 'All Rights Reserved',
    'footer.quickLinks': 'Quick Links',
    'footer.description':
      'The ultimate QR code solution for scanning, generating, and customizing QR codes.',
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.about': 'About',
    'nav.reviews': 'Reviews',
    'nav.policy': 'Policy',
    'policy.title': 'Privacy Policy & Terms of Service',
    'policy.privacy.title': 'Privacy Policy',
    'policy.privacy.updated': 'Last updated: April 4, 2023',
    'policy.terms.title': 'Terms of Service',
    'policy.terms.updated': 'Last updated: April 4, 2023',
  },
  es: {
    'hero.tagline':
      'Escanea, Genera, Personaliza - La solución definitiva de códigos QR.',
    'cta.googlePlay': 'Google Play',
    'cta.appStore': 'App Store',
    'features.title': 'Características Potentes',
    'features.subtitle':
      'Descubre todas las potentes características que hacen de nuestro Escáner y Generador de QR la solución definitiva para todas tus necesidades de códigos QR.',
    'features.scan': 'Escanear y Generar Códigos QR',
    'features.scan.description':
      'Escanea rápidamente cualquier código QR o genera códigos personalizados para sitios web, redes sociales y más.',
    'features.customize': 'Personalizar Códigos QR',
    'features.customize.description':
      'Haz que tus códigos QR destaquen con colores personalizados, formas e incluso añade tu logo.',
    'features.history': 'Registro de Historial',
    'features.history.description':
      'Mantén un seguimiento de todos tus códigos QR escaneados y generados con nuestro registro de historial integrado.',
    'features.theme': 'Modo Claro/Oscuro',
    'features.theme.description':
      'Elige entre modo claro y oscuro para un escaneo cómodo en cualquier entorno.',
    'features.feedback': 'Retroalimentación Háptica y Sonido',
    'features.feedback.description':
      'Disfruta de una experiencia más interactiva con retroalimentación háptica y notificaciones de sonido.',
    'features.language': 'Soporte Multilingüe',
    'features.language.description':
      'Usa la aplicación en tu idioma preferido con nuestro completo soporte multilingüe.',
    'features.interface': 'Interfaz Simple e Intuitiva',
    'features.interface.description':
      'Navega sin esfuerzo con nuestra interfaz limpia, intuitiva y fácil de usar.',
    'screenshots.title': 'Capturas de Pantalla',
    'screenshots.subtitle':
      'Echa un vistazo más de cerca al elegante diseño e interfaz intuitiva de nuestra aplicación.',
    'screenshots.alt.home': 'Pantalla de Inicio',
    'screenshots.alt.scanning': 'Escaneando Código QR',
    'screenshots.alt.generator': 'Generador de Códigos QR',
    'screenshots.alt.customization': 'Opciones de Personalización',
    'screenshots.alt.history': 'Registro de Historial',
    'screenshots.alt.settings': 'Pantalla de Configuración',
    'screenshots.alt.darkMode': 'Modo Oscuro',
    'team.title': 'Sobre el Equipo de Desarrollo',
    'team.description':
      'VNDev Labs es un equipo de desarrolladores apasionados dedicados a crear aplicaciones innovadoras y fáciles de usar.',
    'team.longDescription':
      'Nuestro equipo de desarrolladores y diseñadores experimentados está apasionado por crear aplicaciones móviles innovadoras que resuelvan problemas del mundo real. Con un enfoque en la experiencia del usuario y el rendimiento, nos esforzamos por ofrecer productos que superen las expectativas.',
    'team.experience': 'Años de Experiencia',
    'team.apps': 'Aplicaciones Desarrolladas',
    'team.users': 'Usuarios Satisfechos',
    'company.title': 'Sobre VNDev Labs',
    'company.description':
      'VNDev Labs es una empresa de desarrollo de software con visión de futuro centrada en la creación de aplicaciones móviles de vanguardia.',
    'company.mission':
      'Nuestra misión es crear aplicaciones que faciliten y hagan más productiva la vida de las personas.',
    'company.vision':
      'Creemos en la innovación continua, el diseño centrado en el usuario y la entrega de calidad excepcional en todo lo que hacemos.',
    'reviews.title': 'Lo Que Dicen Nuestros Usuarios',
    'reviews.subtitle':
      'No solo tomes nuestra palabra. Esto es lo que nuestros usuarios dicen sobre Quick QR Scanner & Generator.',
    'reviews.cta.text':
      '¿Te gusta nuestra aplicación? ¡Comparte tu experiencia con otros!',
    'reviews.cta.button': 'Escribir una Reseña',
    'cta.download': 'Descargar la Aplicación',
    'cta.subtitle':
      'Únete a millones de usuarios que confían en Quick QR Scanner & Generator para todas sus necesidades de códigos QR. ¡Descárgalo ahora y experimenta la diferencia!',
    'footer.contact': 'Contacto y Soporte',
    'footer.rights': 'Todos los Derechos Reservados',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.description':
      'La solución definitiva para escanear, generar y personalizar códigos QR.',
    'nav.features': 'Características',
    'nav.screenshots': 'Capturas',
    'nav.about': 'Acerca de',
    'nav.reviews': 'Reseñas',
    'nav.policy': 'Política',
    'policy.title': 'Política de Privacidad y Términos de Servicio',
    'policy.privacy.title': 'Política de Privacidad',
    'policy.privacy.updated': 'Última actualización: 4 de abril de 2023',
    'policy.terms.title': 'Términos de Servicio',
    'policy.terms.updated': 'Última actualización: 4 de abril de 2023',
  },
  fr: {
    'hero.tagline':
      'Scannez, Générez, Personnalisez - La solution QR Code ultime.',
    'cta.googlePlay': 'Google Play',
    'cta.appStore': 'App Store',
    'features.title': 'Fonctionnalités Puissantes',
    'features.subtitle':
      'Découvrez toutes les fonctionnalités puissantes qui font de notre Scanner et Générateur de QR la solution ultime pour tous vos besoins de codes QR.',
    'features.scan': 'Scanner et Générer des Codes QR',
    'features.scan.description':
      "Scannez rapidement n'importe quel code QR ou générez des codes personnalisés pour sites web, réseaux sociaux et plus encore.",
    'features.customize': 'Personnaliser les Codes QR',
    'features.customize.description':
      'Faites ressortir vos codes QR avec des couleurs personnalisées, des formes et même ajoutez votre logo.',
    'features.history': "Journal d'Historique",
    'features.history.description':
      "Gardez une trace de tous vos codes QR scannés et générés avec notre journal d'historique intégré.",
    'features.theme': 'Mode Clair/Sombre',
    'features.theme.description':
      "Choisissez entre le mode clair et sombre pour un scan confortable dans n'importe quel environnement.",
    'features.feedback': 'Retour Haptique et Son',
    'features.feedback.description':
      "Profitez d'une expérience plus interactive avec retour haptique et notifications sonores.",
    'features.language': 'Support Multilingue',
    'features.language.description':
      "Utilisez l'application dans votre langue préférée avec notre support multilingue complet.",
    'features.interface': 'Interface Simple et Intuitive',
    'features.interface.description':
      'Naviguez sans effort avec notre interface propre, intuitive et conviviale.',
    'screenshots.title': "Captures d'Écran",
    'screenshots.subtitle':
      "Regardez de plus près le design élégant et l'interface intuitive de notre application.",
    'screenshots.alt.home': "Écran d'Accueil",
    'screenshots.alt.scanning': 'Scan de Code QR',
    'screenshots.alt.generator': 'Générateur de Code QR',
    'screenshots.alt.customization': 'Options de Personnalisation',
    'screenshots.alt.history': "Journal d'Historique",
    'screenshots.alt.settings': 'Écran de Paramètres',
    'screenshots.alt.darkMode': 'Mode Sombre',
    'team.title': "À Propos de l'Équipe de Développement",
    'team.description':
      "VNDev Labs est une équipe de développeurs passionnés dédiés à la création d'applications innovantes et conviviales.",
    'team.longDescription':
      "Notre équipe de développeurs et de designers expérimentés est passionnée par la création d'applications mobiles innovantes qui résolvent des problèmes réels. En mettant l'accent sur l'expérience utilisateur et la performance, nous nous efforçons de fournir des produits qui dépassent les attentes.",
    'team.experience': "Années d'Expérience",
    'team.apps': 'Applications Développées',
    'team.users': 'Utilisateurs Satisfaits',
    'company.title': 'À Propos de VNDev Labs',
    'company.description':
      "VNDev Labs est une entreprise de développement de logiciels tournée vers l'avenir et axée sur la création d'applications mobiles de pointe.",
    'company.mission':
      'Notre mission est de créer des applications qui facilitent et rendent plus productive la vie des gens.',
    'company.vision':
      "Nous croyons en l'innovation continue, la conception centrée sur l'utilisateur et la livraison d'une qualité exceptionnelle dans tout ce que nous faisons.",
    'reviews.title': 'Ce Que Disent Nos Utilisateurs',
    'reviews.subtitle':
      'Ne prenez pas seulement notre parole. Voici ce que nos utilisateurs disent à propos de Quick QR Scanner & Generator.',
    'reviews.cta.text':
      "Vous aimez notre application ? Partagez votre expérience avec d'autres !",
    'reviews.cta.button': 'Écrire un Avis',
    'cta.download': "Télécharger l'Application",
    'cta.subtitle':
      "Rejoignez des millions d'utilisateurs qui font confiance à Quick QR Scanner & Generator pour tous leurs besoins de codes QR. Téléchargez maintenant et découvrez la différence !",
    'footer.contact': 'Contact et Support',
    'footer.rights': 'Tous Droits Réservés',
    'footer.quickLinks': 'Liens Rapides',
    'footer.description':
      'La solution ultime pour scanner, générer et personnaliser des codes QR.',
    'nav.features': 'Fonctionnalités',
    'nav.screenshots': "Captures d'Écran",
    'nav.about': 'À Propos',
    'nav.reviews': 'Avis',
    'nav.policy': 'Politique',
    'policy.title': "Politique de Confidentialité et Conditions d'Utilisation",
    'policy.privacy.title': 'Politique de Confidentialité',
    'policy.privacy.updated': 'Dernière mise à jour : 4 avril 2023',
    'policy.terms.title': "Conditions d'Utilisation",
    'policy.terms.updated': 'Dernière mise à jour : 4 avril 2023',
  },
  de: {
    'hero.tagline':
      'Scannen, Generieren, Anpassen - Die ultimative QR-Code-Lösung.',
    'cta.googlePlay': 'Google Play',
    'cta.appStore': 'App Store',
    'features.title': 'Leistungsstarke Funktionen',
    'features.subtitle':
      'Entdecken Sie alle leistungsstarken Funktionen, die unseren QR-Scanner und Generator zur ultimativen Lösung für alle Ihre QR-Code-Bedürfnisse machen.',
    'features.scan': 'QR-Codes scannen und generieren',
    'features.scan.description':
      'Scannen Sie schnell jeden QR-Code oder generieren Sie benutzerdefinierte Codes für Websites, soziale Medien und mehr.',
    'features.customize': 'QR-Codes anpassen',
    'features.customize.description':
      'Lassen Sie Ihre QR-Codes mit benutzerdefinierten Farben, Formen und sogar Ihrem Logo hervorstechen.',
    'features.history': 'Verlaufsprotokoll',
    'features.history.description':
      'Behalten Sie den Überblick über alle Ihre gescannten und generierten QR-Codes mit unserem integrierten Verlaufsprotokoll.',
    'features.theme': 'Hell-/Dunkelmodus',
    'features.theme.description':
      'Wählen Sie zwischen Hell- und Dunkelmodus für komfortables Scannen in jeder Umgebung.',
    'features.feedback': 'Haptisches Feedback und Sound',
    'features.feedback.description':
      'Genießen Sie ein interaktiveres Erlebnis mit haptischem Feedback und Soundbenachrichtigungen.',
    'features.language': 'Mehrsprachige Unterstützung',
    'features.language.description':
      'Verwenden Sie die App in Ihrer bevorzugten Sprache mit unserer umfassenden mehrsprachigen Unterstützung.',
    'features.interface': 'Einfache und intuitive Benutzeroberfläche',
    'features.interface.description':
      'Navigieren Sie mühelos mit unserer übersichtlichen, intuitiven und benutzerfreundlichen Oberfläche.',
    'screenshots.title': 'App-Screenshots',
    'features.interface': 'Einfache und intuitive Benutzeroberfläche',
    'features.interface.description':
      'Navigieren Sie mühelos mit unserer übersichtlichen, intuitiven und benutzerfreundlichen Oberfläche.',
    'screenshots.title': 'App-Screenshots',
    'screenshots.subtitle':
      'Werfen Sie einen genaueren Blick auf das elegante Design und die intuitive Benutzeroberfläche unserer App.',
    'screenshots.alt.home': 'Startbildschirm',
    'screenshots.alt.scanning': 'QR-Code Scannen',
    'screenshots.alt.generator': 'QR-Code Generator',
    'screenshots.alt.customization': 'Anpassungsoptionen',
    'screenshots.alt.history': 'Verlaufsprotokoll',
    'screenshots.alt.settings': 'Einstellungsbildschirm',
    'screenshots.alt.darkMode': 'Dunkelmodus',
    'team.title': 'Über das Entwicklungsteam',
    'team.description':
      'VNDev Labs ist ein Team leidenschaftlicher Entwickler, die sich der Erstellung innovativer und benutzerfreundlicher Anwendungen widmen.',
    'team.longDescription':
      'Unser Team aus erfahrenen Entwicklern und Designern ist leidenschaftlich daran interessiert, innovative mobile Anwendungen zu erstellen, die reale Probleme lösen. Mit Fokus auf Benutzererfahrung und Leistung streben wir danach, Produkte zu liefern, die die Erwartungen übertreffen.',
    'team.experience': 'Jahre Erfahrung',
    'team.apps': 'Entwickelte Apps',
    'team.users': 'Zufriedene Nutzer',
    'company.title': 'Über VNDev Labs',
    'company.description':
      'VNDev Labs ist ein zukunftsorientiertes Softwareentwicklungsunternehmen, das sich auf die Erstellung modernster mobiler Anwendungen konzentriert.',
    'company.mission':
      'Unsere Mission ist es, Anwendungen zu erstellen, die das Leben der Menschen einfacher und produktiver machen.',
    'company.vision':
      'Wir glauben an kontinuierliche Innovation, benutzerzentriertes Design und außergewöhnliche Qualität in allem, was wir tun.',
    'reviews.title': 'Was unsere Benutzer sagen',
    'reviews.subtitle':
      'Nehmen Sie nicht nur unser Wort dafür. Hier ist, was unsere Benutzer über Quick QR Scanner & Generator sagen.',
    'reviews.cta.text':
      'Lieben Sie unsere App? Teilen Sie Ihre Erfahrung mit anderen!',
    'reviews.cta.button': 'Bewertung schreiben',
    'cta.download': 'App herunterladen',
    'cta.subtitle':
      'Schließen Sie sich Millionen von Benutzern an, die Quick QR Scanner & Generator für alle ihre QR-Code-Bedürfnisse vertrauen. Laden Sie jetzt herunter und erleben Sie den Unterschied!',
    'footer.contact': 'Kontakt & Support',
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.quickLinks': 'Schnelllinks',
    'footer.description':
      'Die ultimative Lösung zum Scannen, Generieren und Anpassen von QR-Codes.',
    'nav.features': 'Funktionen',
    'nav.screenshots': 'Screenshots',
    'nav.about': 'Über uns',
    'nav.reviews': 'Bewertungen',
    'nav.policy': 'Richtlinien',
    'policy.title': 'Datenschutzrichtlinie und Nutzungsbedingungen',
    'policy.privacy.title': 'Datenschutzrichtlinie',
    'policy.privacy.updated': 'Zuletzt aktualisiert: 4. April 2023',
    'policy.terms.title': 'Nutzungsbedingungen',
    'policy.terms.updated': 'Zuletzt aktualisiert: 4. April 2023',
  },
  zh: {
    'hero.tagline': '扫描、生成、自定义 - 终极二维码解决方案。',
    'cta.googlePlay': 'Google Play',
    'cta.appStore': 'App Store',
    'features.title': '强大功能',
    'features.subtitle':
      '探索使我们的二维码扫描器和生成器成为所有二维码需求的终极解决方案的所有强大功能。',
    'features.scan': '扫描和生成二维码',
    'features.scan.description':
      '快速扫描任何二维码或为网站、社交媒体等生成自定义代码。',
    'features.customize': '自定义二维码',
    'features.customize.description':
      '使用自定义颜色、形状，甚至添加您的徽标，让您的二维码脱颖而出。',
    'features.history': '历史记录',
    'features.history.description':
      '使用我们内置的历史记录跟踪所有扫描和生成的二维码。',
    'features.theme': '明/暗模式',
    'features.theme.description': '选择明暗模式，在任何环境中舒适扫描。',
    'features.feedback': '触觉反馈和声音',
    'features.feedback.description':
      '通过触觉反馈和声音通知享受更具互动性的体验。',
    'features.language': '多语言支持',
    'features.language.description':
      '使用我们全面的多语言支持，以您喜欢的语言使用应用程序。',
    'features.interface': '简单直观的界面',
    'features.interface.description':
      '通过我们干净、直观和用户友好的界面轻松导航。',
    'screenshots.title': '应用截图',
    'screenshots.subtitle': '仔细查看我们应用程序的时尚设计和直观界面。',
    'screenshots.alt.home': '主屏幕',
    'screenshots.alt.scanning': '扫描二维码',
    'screenshots.alt.generator': '二维码生成器',
    'screenshots.alt.customization': '自定义选项',
    'screenshots.alt.history': '历史记录',
    'screenshots.alt.settings': '设置屏幕',
    'screenshots.alt.darkMode': '暗模式',
    'team.title': '关于开发团队',
    'team.description':
      'VNDev Labs是一个充满激情的开发团队，致力于创建创新和用户友好的应用程序。',
    'team.longDescription':
      '我们的经验丰富的开发人员和设计师团队热衷于创建解决现实世界问题的创新移动应用程序。以用户体验和性能为重点，我们努力提供超出期望的产品。',
    'team.experience': '年经验',
    'team.apps': '开发的应用',
    'team.users': '满意用户',
    'company.title': '关于VNDev Labs',
    'company.description':
      'VNDev Labs是一家前瞻性的软件开发公司，专注于创建尖端移动应用程序。',
    'company.mission': '我们的使命是创建使人们的生活更轻松、更高效的应用程序。',
    'company.vision':
      '我们相信持续创新、以用户为中心的设计以及在所有工作中提供卓越品质。',
    'reviews.title': '用户评价',
    'reviews.subtitle':
      '不要只相信我们的话。这是用户对Quick QR Scanner & Generator的评价。',
    'reviews.cta.text': '喜欢我们的应用？与他人分享您的体验！',
    'reviews.cta.button': '写评论',
    'cta.download': '下载应用',
    'cta.subtitle':
      '加入数百万信任Quick QR Scanner & Generator满足所有二维码需求的用户。立即下载，体验不同！',
    'footer.contact': '联系和支持',
    'footer.rights': '版权所有',
    'footer.quickLinks': '快速链接',
    'footer.description': '扫描、生成和自定义二维码的终极解决方案。',
    'nav.features': '功能',
    'nav.screenshots': '截图',
    'nav.about': '关于',
    'nav.reviews': '评论',
    'nav.policy': '政策',
    'policy.title': '隐私政策和服务条款',
    'policy.privacy.title': '隐私政策',
    'policy.privacy.updated': '最后更新：2023年4月4日',
    'policy.terms.title': '服务条款',
    'policy.terms.updated': '最后更新：2023年4月4日',
  },
  ja: {
    'hero.tagline':
      'スキャン、生成、カスタマイズ - 究極のQRコードソリューション。',
    'cta.googlePlay': 'Google Play',
    'cta.appStore': 'App Store',
    'features.title': '強力な機能',
    'features.subtitle':
      'QRスキャナー＆ジェネレーターをすべてのQRコードニーズの究極のソリューションにする強力な機能をすべて発見してください。',
    'features.scan': 'QRコードのスキャンと生成',
    'features.scan.description':
      '任意のQRコードを素早くスキャンしたり、ウェブサイト、ソーシャルメディアなどのカスタムコードを生成したりできます。',
    'features.customize': 'QRコードのカスタマイズ',
    'features.customize.description':
      'カスタムカラー、形状、さらにはロゴを追加して、QRコードを目立たせましょう。',
    'features.history': '履歴ログ',
    'features.history.description':
      '内蔵の履歴ログで、スキャンおよび生成したすべてのQRコードを追跡します。',
    'features.theme': 'ライト/ダークモード',
    'features.theme.description':
      'どんな環境でも快適にスキャンできるよう、ライトモードとダークモードを選択できます。',
    'features.feedback': '触覚フィードバックとサウンド',
    'features.feedback.description':
      '触覚フィードバックとサウンド通知でより対話的な体験をお楽しみください。',
    'features.language': '多言語サポート',
    'features.language.description':
      '包括的な多言語サポートにより、お好みの言語でアプリを使用できます。',
    'features.interface': 'シンプルで直感的なインターフェース',
    'features.interface.description':
      'クリーンで直感的、そしてユーザーフレンドリーなインターフェースで簡単に操作できます。',
    'screenshots.title': 'アプリのスクリーンショット',
    'screenshots.subtitle':
      'アプリのスタイリッシュなデザインと直感的なインターフェースをより詳しくご覧ください。',
    'screenshots.alt.home': 'ホーム画面',
    'screenshots.alt.scanning': 'QRコードのスキャン',
    'screenshots.alt.generator': 'QRコードジェネレーター',
    'screenshots.alt.customization': 'カスタマイズオプション',
    'screenshots.alt.history': '履歴ログ',
    'screenshots.alt.settings': '設定画面',
    'screenshots.alt.darkMode': 'ダークモード',
    'team.title': '開発チームについて',
    'team.description':
      'VNDev Labsは、革新的でユーザーフレンドリーなアプリケーションの作成に専念している情熱的な開発者のチームです。',
    'team.longDescription':
      '経験豊富な開発者とデザイナーのチームは、実世界の問題を解決する革新的なモバイルアプリケーションの作成に情熱を注いでいます。ユーザー体験とパフォーマンスに焦点を当て、期待を超える製品を提供するよう努めています。',
    'team.experience': '年の経験',
    'team.apps': '開発したアプリ',
    'team.users': '満足しているユーザー',
    'company.title': 'VNDev Labsについて',
    'company.description':
      'VNDev Labsは、最先端のモバイルアプリケーションの作成に焦点を当てた先進的なソフトウェア開発会社です。',
    'company.mission':
      '私たちの使命は、人々の生活をより簡単に、より生産的にするアプリケーションを作ることです。',
    'company.vision':
      '私たちは、継続的な革新、ユーザー中心の設計、そして私たちが行うすべてのことで卓越した品質を提供することを信じています。',
    'reviews.title': 'ユーザーの声',
    'reviews.subtitle':
      '私たちの言葉だけを信じないでください。これがユーザーがQuick QR Scanner & Generatorについて言っていることです。',
    'reviews.cta.text':
      '私たちのアプリを気に入っていただけましたか？あなたの経験を他の人と共有してください！',
    'reviews.cta.button': 'レビューを書く',
    'cta.download': 'アプリをダウンロード',
    'cta.subtitle':
      'すべてのQRコードニーズにQuick QR Scanner & Generatorを信頼している何百万ものユーザーに参加しましょう。今すぐダウンロードして、その違いを体験してください！',
    'footer.contact': 'お問い合わせとサポート',
    'footer.rights': '全著作権所有',
    'footer.quickLinks': 'クイックリンク',
    'footer.description':
      'スキャン、生成、カスタマイズのための究極のQRコードソリューション。',
    'nav.features': '機能',
    'nav.screenshots': 'スクリーンショット',
    'nav.about': 'について',
    'nav.reviews': 'レビュー',
    'nav.policy': 'ポリシー',
    'policy.title': 'プライバシーポリシーと利用規約',
    'policy.privacy.title': 'プライバシーポリシー',
    'policy.privacy.updated': '最終更新日：2023年4月4日',
    'policy.terms.title': '利用規約',
    'policy.terms.updated': '最終更新日：2023年4月4日',
  },
  ko: {
    'hero.tagline': '스캔, 생성, 커스터마이즈 - 궁극의 QR 코드 솔루션.',
    'cta.googlePlay': 'Google Play',
    'cta.appStore': 'App Store',
    'features.title': '강력한 기능',
    'features.subtitle':
      'QR 스캐너 및 생성기를 모든 QR 코드 요구 사항에 대한 궁극의 솔루션으로 만드는 모든 강력한 기능을 발견하세요.',
    'features.scan': 'QR 코드 스캔 및 생성',
    'features.scan.description':
      '모든 QR 코드를 빠르게 스캔하거나 웹사이트, 소셜 미디어 등을 위한 맞춤형 코드를 생성하세요.',
    'features.customize': 'QR 코드 커스터마이즈',
    'features.customize.description':
      '맞춤형 색상, 모양, 심지어 로고를 추가하여 QR 코드를 돋보이게 하세요.',
    'features.history': '기록 로그',
    'features.history.description':
      '내장된 기록 로그로 스캔하고 생성한 모든 QR 코드를 추적하세요.',
    'features.theme': '라이트/다크 모드',
    'features.theme.description':
      '어떤 환경에서도 편안한 스캔을 위해 라이트 모드와 다크 모드 중에서 선택하세요.',
    'features.feedback': '햅틱 피드백 및 사운드',
    'features.feedback.description':
      '햅틱 피드백과 사운드 알림으로 더 상호작용적인 경험을 즐기세요.',
    'features.language': '다국어 지원',
    'features.language.description':
      '포괄적인 다국어 지원으로 선호하는 언어로 앱을 사용하세요.',
    'features.interface': '간단하고 직관적인 인터페이스',
    'features.interface.description':
      '깔끔하고 직관적이며 사용자 친화적인 인터페이스로 쉽게 탐색하세요.',
    'screenshots.title': '앱 스크린샷',
    'screenshots.subtitle':
      '앱의 세련된 디자인과 직관적인 인터페이스를 자세히 살펴보세요.',
    'screenshots.alt.home': '홈 화면',
    'screenshots.alt.scanning': 'QR 코드 스캔',
    'screenshots.alt.generator': 'QR 코드 생성기',
    'screenshots.alt.customization': '커스터마이제이션 옵션',
    'screenshots.alt.history': '기록 로그',
    'screenshots.alt.settings': '설정 화면',
    'screenshots.alt.darkMode': '다크 모드',
    'team.title': '개발팀 소개',
    'team.description':
      'VNDev Labs는 혁신적이고 사용자 친화적인 애플리케이션을 만드는 데 전념하는 열정적인 개발자 팀입니다.',
    'team.longDescription':
      '경험이 풍부한 개발자와 디자이너로 구성된 우리 팀은 실제 문제를 해결하는 혁신적인 모바일 애플리케이션을 만드는 데 열정을 가지고 있습니다. 사용자 경험과 성능에 중점을 두고, 기대를 뛰어넘는 제품을 제공하기 위해 노력합니다.',
    'team.experience': '년 경험',
    'team.apps': '개발된 앱',
    'team.users': '만족한 사용자',
    'company.title': 'VNDev Labs 소개',
    'company.description':
      'VNDev Labs는 최첨단 모바일 애플리케이션 제작에 중점을 둔 미래 지향적인 소프트웨어 개발 회사입니다.',
    'company.mission':
      '우리의 사명은 사람들의 삶을 더 쉽고 생산적으로 만드는 애플리케이션을 만드는 것입니다.',
    'company.vision':
      '우리는 지속적인 혁신, 사용자 중심 디자인, 그리고 우리가 하는 모든 일에서 탁월한 품질을 제공하는 것을 믿습니다.',
    'reviews.title': '사용자 후기',
    'reviews.subtitle':
      '우리의 말만 믿지 마세요. 사용자들이 Quick QR Scanner & Generator에 대해 말하는 것을 확인하세요.',
    'reviews.cta.text':
      '우리 앱이 마음에 드시나요? 다른 사람들과 경험을 공유하세요!',
    'reviews.cta.button': '리뷰 작성',
    'cta.download': '앱 다운로드',
    'cta.subtitle':
      '모든 QR 코드 요구 사항에 Quick QR Scanner & Generator를 신뢰하는 수백만 명의 사용자와 함께하세요. 지금 다운로드하고 차이를 경험하세요!',
    'footer.contact': '연락처 및 지원',
    'footer.rights': '모든 권리 보유',
    'footer.quickLinks': '빠른 링크',
    'footer.description':
      '스캔, 생성 및 커스터마이즈를 위한 궁극의 QR 코드 솔루션.',
    'nav.features': '기능',
    'nav.screenshots': '스크린샷',
    'nav.about': '소개',
    'nav.reviews': '리뷰',
    'nav.policy': '정책',
    'policy.title': '개인정보 보호정책 및 서비스 약관',
    'policy.privacy.title': '개인정보 보호정책',
    'policy.privacy.updated': '마지막 업데이트: 2023년 4월 4일',
    'policy.terms.title': '서비스 약관',
    'policy.terms.updated': '마지막 업데이트: 2023년 4월 4일',
  },
  vi: {
    'hero.tagline': 'Quét, Tạo, Tùy chỉnh - Giải pháp mã QR tối ưu.',
    'cta.googlePlay': 'Google Play',
    'cta.appStore': 'App Store',
    'features.title': 'Tính năng mạnh mẽ',
    'features.subtitle':
      'Khám phá tất cả các tính năng mạnh mẽ giúp Máy quét & Tạo mã QR của chúng tôi trở thành giải pháp tối ưu cho mọi nhu cầu mã QR của bạn.',
    'features.scan': 'Quét và Tạo mã QR',
    'features.scan.description':
      'Nhanh chóng quét bất kỳ mã QR nào hoặc tạo mã tùy chỉnh cho trang web, mạng xã hội và hơn thế nữa.',
    'features.customize': 'Tùy chỉnh mã QR',
    'features.customize.description':
      'Làm cho mã QR của bạn nổi bật với màu sắc tùy chỉnh, hình dạng và thậm chí thêm logo của bạn.',
    'features.history': 'Nhật ký lịch sử',
    'features.history.description':
      'Theo dõi tất cả các mã QR đã quét và tạo với nhật ký lịch sử tích hợp của chúng tôi.',
    'features.theme': 'Chế độ Sáng/Tối',
    'features.theme.description':
      'Chọn giữa chế độ sáng và tối để quét thoải mái trong mọi môi trường.',
    'features.feedback': 'Phản hồi xúc giác & Âm thanh',
    'features.feedback.description':
      'Tận hưởng trải nghiệm tương tác hơn với phản hồi xúc giác và thông báo âm thanh.',
    'features.language': 'Hỗ trợ đa ngôn ngữ',
    'features.language.description':
      'Sử dụng ứng dụng bằng ngôn ngữ ưa thích của bạn với hỗ trợ đa ngôn ngữ toàn diện của chúng tôi.',
    'features.interface': 'Giao diện đơn giản & trực quan',
    'features.interface.description':
      'Điều hướng dễ dàng với giao diện sạch sẽ, trực quan và thân thiện với người dùng của chúng tôi.',
    'screenshots.title': 'Ảnh chụp màn hình ứng dụng',
    'screenshots.subtitle':
      'Xem kỹ hơn thiết kế thanh lịch và giao diện trực quan của ứng dụng chúng tôi.',
    'screenshots.alt.home': 'Màn hình chính',
    'screenshots.alt.scanning': 'Quét mã QR',
    'screenshots.alt.generator': 'Trình tạo mã QR',
    'screenshots.alt.customization': 'Tùy chọn tùy chỉnh',
    'screenshots.alt.history': 'Nhật ký lịch sử',
    'screenshots.alt.settings': 'Màn hình cài đặt',
    'screenshots.alt.darkMode': 'Chế độ tối',
    'team.title': 'Về đội ngũ phát triển',
    'team.description':
      'VNDev Labs là một đội ngũ nhà phát triển đầy nhiệt huyết, chuyên tạo ra các ứng dụng sáng tạo và thân thiện với người dùng.',
    'team.longDescription':
      'Đội ngũ nhà phát triển và nhà thiết kế giàu kinh nghiệm của chúng tôi đam mê tạo ra các ứng dụng di động sáng tạo giải quyết các vấn đề thực tế. Với trọng tâm là trải nghiệm người dùng và hiệu suất, chúng tôi nỗ lực cung cấp các sản phẩm vượt quá mong đợi.',
    'team.experience': 'Năm kinh nghiệm',
    'team.apps': 'Ứng dụng đã phát triển',
    'team.users': 'Người dùng hài lòng',
    'company.title': 'Về VNDev Labs',
    'company.description':
      'VNDev Labs là công ty phát triển phần mềm tiên phong, tập trung vào việc tạo ra các ứng dụng di động tiên tiến.',
    'company.mission':
      'Sứ mệnh của chúng tôi là tạo ra các ứng dụng giúp cuộc sống của mọi người dễ dàng và hiệu quả hơn.',
    'company.vision':
      'Chúng tôi tin tưởng vào đổi mới liên tục, thiết kế lấy người dùng làm trung tâm và cung cấp chất lượng xuất sắc trong mọi việc chúng tôi làm.',
    'reviews.title': 'Người dùng nói gì',
    'reviews.subtitle':
      'Đừng chỉ tin lời chúng tôi. Đây là những gì người dùng nói về Quick QR Scanner & Generator.',
    'reviews.cta.text':
      'Yêu thích ứng dụng của chúng tôi? Chia sẻ trải nghiệm của bạn với người khác!',
    'reviews.cta.button': 'Viết đánh giá',
    'cta.download': 'Tải xuống ứng dụng',
    'cta.subtitle':
      'Tham gia cùng hàng triệu người dùng tin tưởng Quick QR Scanner & Generator cho mọi nhu cầu mã QR. Tải xuống ngay và trải nghiệm sự khác biệt!',
    'footer.contact': 'Liên hệ & Hỗ trợ',
    'footer.rights': 'Bản quyền thuộc về',
    'footer.quickLinks': 'Liên kết nhanh',
    'footer.description':
      'Giải pháp mã QR tối ưu để quét, tạo và tùy chỉnh mã QR.',
    'nav.features': 'Tính năng',
    'nav.screenshots': 'Ảnh chụp màn hình',
    'nav.about': 'Giới thiệu',
    'nav.reviews': 'Đánh giá',
    'nav.policy': 'Chính sách',
    'policy.title': 'Chính sách bảo mật & Điều khoản dịch vụ',
    'policy.privacy.title': 'Chính sách bảo mật',
    'policy.privacy.updated': 'Cập nhật lần cuối: Ngày 4 tháng 4 năm 2023',
    'policy.terms.title': 'Điều khoản dịch vụ',
    'policy.terms.updated': 'Cập nhật lần cuối: Ngày 4 tháng 4 năm 2023',
  },
};

const initialState: LanguageProviderState = {
  language: 'en',
  setLanguage: () => null,
  t: (key: string) => key,
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = 'en',
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage =
      typeof window !== 'undefined'
        ? (localStorage.getItem('language') as Language)
        : null;

    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Function to get translation
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    setLanguage: (language: Language) => {
      setLanguage(language);
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', language);
      }
    },
    t,
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
