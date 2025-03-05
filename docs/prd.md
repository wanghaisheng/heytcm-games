# HEYTCM Game Portal - Product Requirements Document

## 1. Introduction

### 1.1 Purpose
This document outlines the requirements for the HEYTCM Game Portal, a comprehensive platform designed to showcase and provide access to various Traditional Chinese Medicine (TCM) themed games. The portal aims to create an engaging ecosystem that combines gaming with TCM education and cultural promotion.

### 1.2 Scope
The HEYTCM Game Portal will serve as a centralized hub for three distinct game sources:
- H5 lightweight games (third-party)
- TCM self-developed games
- Open-source community games

The platform will provide game discovery, categorization, user engagement features, and integration with TCM cultural elements through the Five Elements (Wu Xing) philosophy.

### 1.3 Target Audience
- TCM enthusiasts and students
- Casual gamers interested in cultural/educational content
- Game developers interested in TCM themes
- Educational institutions teaching TCM concepts
- General users seeking entertainment with cultural value

## 2. Product Overview

### 2.1 Product Vision
To create the leading platform for TCM-themed games that entertains, educates, and builds community around Traditional Chinese Medicine concepts.

### 2.2 Product Objectives
1. Aggregate and showcase TCM-themed games from multiple sources
2. Provide an intuitive and engaging user interface with TCM cultural elements
3. Implement a Five Elements (Wu Xing) energy system to gamify the platform experience
4. Create a developer ecosystem for TCM-themed game creation
5. Build community features to encourage user engagement and retention
6. Establish a sustainable platform with potential for monetization

### 2.3 Success Metrics
- Monthly active users (MAU): Target 50,000+ within 6 months of launch
- Game engagement: Average session time of 15+ minutes
- Game library: 100+ games within first year
- Developer participation: 20+ active developers in the ecosystem
- User retention: 40%+ monthly retention rate

## 3. Feature Requirements

### 3.1 Core Features

#### 3.1.1 Game Discovery and Navigation
- **Homepage with Featured Games**: Showcase popular and new games
- **Game Library**: Complete catalog of all available games
- **Category System**: Browse games by type, style, theme, and source
- **Search Functionality**: Find games by name, category, or tags
- **Five Elements Star Map**: Interactive visualization for game discovery based on Wu Xing elements

#### 3.1.2 Game Detail Pages
- **Game Information**: Title, description, screenshots, ratings
- **TCM Elements Analysis**: Breakdown of TCM concepts in each game
- **Five Elements Compatibility**: Show game's alignment with Wu Xing elements
- **Play Options**: Direct play, download links, or source code access
- **Related Games**: Suggestions based on similar TCM concepts or gameplay

#### 3.1.3 User Account System
- **Profile Creation**: Basic user information and preferences
- **Game History**: Track played games and favorites
- **Energy System**: Personal Five Elements energy balance tracking
- **Achievements**: Rewards for platform engagement and game completion

#### 3.1.4 Energy Market
- **Energy Trading**: Exchange Five Elements energy between users
- **Item Shop**: Purchase game items or bonuses with energy
- **Energy Rewards**: Earn energy through gameplay and platform activities

#### 3.1.5 Developer Workshop
- **Resource Library**: TCM assets, APIs, and development tools
- **Documentation**: Guidelines for TCM game development
- **Submission System**: Process for adding games to the platform
- **Developer Community**: Forums and collaboration tools

### 3.2 User Experience Requirements

#### 3.2.1 Visual Design
- **TCM-Inspired Interface**: Incorporate traditional Chinese medicine visual elements
- **Five Elements Color Scheme**: Use the Wu Xing colors throughout the interface
- **Responsive Design**: Support for mobile, tablet, and desktop devices
- **Accessibility**: WCAG 2.1 AA compliance for inclusive user experience

#### 3.2.2 Navigation and Information Architecture
- **Intuitive Menu Structure**: Clear pathways to all major sections
- **Breadcrumb Navigation**: Help users understand their location in the site
- **Consistent Layout**: Maintain design patterns across all pages
- **Progressive Disclosure**: Reveal information complexity gradually

#### 3.2.3 Interaction Design
- **Smooth Transitions**: Animations between states and pages
- **Immediate Feedback**: Visual and audio cues for user actions
- **Error Prevention**: Clear guidance to prevent user mistakes
- **Gamified Elements**: Make navigation and discovery feel game-like

### 3.3 Technical Requirements

#### 3.3.1 Platform Architecture
- **Frontend**: Next.js with React for component-based UI
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Context API for global state
- **Authentication**: JWT-based auth system

#### 3.3.2 Performance Requirements
- **Load Time**: Initial page load under 2 seconds
- **Time to Interactive**: Under 3.5 seconds
- **Responsiveness**: UI updates within 100ms of user input
- **Offline Support**: Basic functionality without internet connection

#### 3.3.3 Security Requirements
- **Data Protection**: Encryption for sensitive user data
- **Authentication**: Secure login and session management
- **Authorization**: Role-based access control
- **API Security**: Rate limiting and input validation

#### 3.3.4 Integration Requirements
- **Game Embedding**: Support for iframe and WebView integration
- **Social Media**: Sharing capabilities for games and achievements
- **Analytics**: Integration with tracking and reporting tools
- **Payment Processing**: For future monetization features

## 4. User Stories

### 4.1 Casual User
- As a casual user, I want to browse games by category so I can find something that interests me
- As a casual user, I want to play games directly in my browser without downloads
- As a casual user, I want to learn about TCM concepts while playing engaging games
- As a casual user, I want to track my progress and achievements across different games

### 4.2 TCM Enthusiast
- As a TCM enthusiast, I want to find games that accurately represent TCM concepts
- As a TCM enthusiast, I want to see detailed explanations of the TCM elements in each game
- As a TCM enthusiast, I want to contribute knowledge or feedback to improve game accuracy
- As a TCM enthusiast, I want to connect with others who share my interest in TCM

### 4.3 Game Developer
- As a developer, I want to access TCM-related assets and APIs to create new games
- As a developer, I want to submit my games to reach a targeted audience
- As a developer, I want analytics on how users interact with my games
- As a developer, I want to collaborate with TCM experts to improve my game's content

### 4.4 Educational Institution
- As an educator, I want to find games suitable for teaching TCM concepts
- As an educator, I want to create custom collections of games for my students
- As an educator, I want to track student engagement and learning outcomes
- As an educator, I want to suggest improvements or new game ideas

## 5. Implementation Phases

### 5.1 Phase 1: MVP (Month 1-2)
- Basic homepage with featured games
- Game library with filtering and search
- Game detail pages with play functionality
- Simple user accounts and favorites
- Initial Five Elements visualization

### 5.2 Phase 2: Core Features (Month 3-4)
- Enhanced game categorization system
- User profiles with game history
- Energy system implementation
- Basic developer resources
- Mobile responsiveness improvements

### 5.3 Phase 3: Community & Ecosystem (Month 5-6)
- Energy market and trading
- Developer workshop with full documentation
- User achievements and rewards
- Community features (comments, ratings)
- Analytics dashboard

### 5.4 Phase 4: Expansion & Monetization (Month 7-12)
- Premium game section
- Subscription options for enhanced features
- Advanced developer tools and API access
- Educational institution partnerships
- International localization

## 6. Technical Architecture

### 6.1 Frontend Architecture
- **Framework**: Next.js 13+ with App Router
- **UI Components**: Custom components with shadcn/ui
- **State Management**: React Context for global state, React Query for data fetching
- **Styling**: Tailwind CSS with custom theme configuration
- **Animations**: Framer Motion for interactive elements

### 6.2 Backend Services
- **API Layer**: Next.js API routes for backend functionality
- **Authentication**: NextAuth.js for user management
- **Database**: MongoDB for flexible document storage
- **File Storage**: Cloud storage for game assets and media
- **Caching**: Redis for performance optimization

### 6.3 Integration Points
- **Game Sources API**: Connectors for H5, TCM, and open-source game repositories
- **Analytics**: Integration with Google Analytics and custom event tracking
- **Social Media**: Share functionality for major platforms
- **Payment Gateway**: Integration for future monetization

## 7. Design Guidelines

### 7.1 Brand Identity
- **Logo**: HEYTCM logo with Five Elements motif
- **Typography**: Primary font for headings, Secondary font for body text
- **Color Palette**: Based on Five Elements theory
  - Metal: Gold/Silver (#D4AF37)
  - Wood: Green (#4CAF50)
  - Water: Blue (#2196F3)
  - Fire: Red (#F44336)
  - Earth: Yellow/Brown (#FFC107)

### 7.2 UI Components
- **Navigation**: Consistent header with main navigation and user menu
- **Cards**: Game cards with consistent information display
- **Buttons**: Primary, secondary, and tertiary button styles
- **Forms**: Standardized input fields and validation
- **Modals**: Consistent dialog boxes for interactions

### 7.3 Responsive Breakpoints
- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px and above

## 8. Analytics and Metrics

### 8.1 User Metrics
- **Acquisition**: Traffic sources, conversion rates
- **Engagement**: Session duration, pages per session, bounce rate
- **Retention**: Return rate, account creation rate
- **Behavior**: Navigation paths, feature usage, search queries

### 8.2 Game Metrics
- **Popularity**: Views, plays, completion rate
- **Engagement**: Average play time, return plays
- **Sharing**: Social shares, referrals
- **Feedback**: Ratings, comments, reported issues

### 8.3 Developer Metrics
- **Contribution**: Number of games submitted
- **Quality**: Average game ratings, user feedback
- **Engagement**: Resource downloads, documentation views
- **Community**: Forum participation, collaboration

## 9. Risks and Mitigations

### 9.1 Technical Risks
- **Risk**: Performance issues with large game library
  - **Mitigation**: Implement pagination, lazy loading, and caching

- **Risk**: Cross-browser compatibility issues
  - **Mitigation**: Comprehensive testing across browsers and devices

- **Risk**: Security vulnerabilities in user-generated content
  - **Mitigation**: Content validation, sandboxed execution

### 9.2 Business Risks
- **Risk**: Insufficient game quantity or quality
  - **Mitigation**: Partnerships with developers, content creation incentives

- **Risk**: Low user adoption or retention
  - **Mitigation**: Engaging onboarding, regular content updates, community building

- **Risk**: Monetization challenges
  - **Mitigation**: Multiple revenue stream options, value-added premium features

## 10. Future Considerations

### 10.1 Platform Expansion
- Mobile applications for iOS and Android
- Desktop application for offline play
- VR/AR experiences for immersive TCM learning

### 10.2 Content Growth
- User-generated content and game creation tools
- Partnerships with TCM institutions for exclusive content
- Localization for international markets

### 10.3 Advanced Features
- AI-powered game recommendations
- Real-time multiplayer capabilities
- Integration with physical TCM products or services

## 11. Appendices

### 11.1 Glossary of TCM Terms
- **Wu Xing (Five Elements)**: Metal, Wood, Water, Fire, Earth
- **Qi**: Vital energy that flows through the body
- **Yin and Yang**: Complementary forces in TCM philosophy
- **Meridians**: Pathways through which qi flows
- **Acupoints**: Specific points along meridians

### 11.2 Technical Stack Details
- Next.js 13+
- React 18+
- Tailwind CSS 3+
- Framer Motion
- shadcn/ui components
- MongoDB
- NextAuth.js

### 11.3 Competitive Analysis
- Comparison with existing game portals
- Unique selling points of HEYTCM Game Portal
- Market positioning strategy

---

Document Version: 1.0
Last Updated: March 4, 2025
Author: HEYTCM Product Team






```
赋予每个游戏金木水火土的标签，根据游戏的主色调来决定属于色彩五行是哪一种，根据游戏的配乐的频率来决定声音五行是哪一种

用户可以测试自己的五行属性，然后游戏和游戏之间可以遵循五行相生相克，也就是采用五色疗法、五音疗法的理论来选择合适的实现边玩游戏边治愈。

积分榜的用户可以参与抽奖，中奖以后可以得到中医配方、实体的养生产品等等。 也可以用积分来兑换现金抵扣或者折扣码，这样子就可以与heytcm旗下的实体或虚拟产品产生了联动。 游玩时长 点击广告次数等榜单也会显示在heytcm官网的贡献榜中，感谢这些用户为heytcm品牌的从0-1所作出的贡献。

这个网站主要是为了那些没有太多资金愿意花时间游玩游戏，而heytcm通过广告来获取收益来支持品牌项目的运营和发展。

在游戏详情页中增加一个版块，针对自研的或者是使用ai remake的经典游戏，添加对应的blog或者youtube视频来讲述复刻过程，复刻的故事


修改游戏三大来源：1经典复刻 使用ai技术 2.中医+经典玩法自研 3 开源托管+汉化

```
