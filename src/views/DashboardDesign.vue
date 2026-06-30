<template>
    <ProjectDetail full-width-images>
        <div class="project-hero">
            <picture>
                <source
                    type="image/webp"
                    :srcset="`${dashboardHeroWebp2400} 2400w, ${dashboardHeroWebp3200} 3200w`"
                    sizes="100vw"
                />
                <img
                    :src="dashboardHeroJpg2400"
                    :srcset="`${dashboardHeroJpg2400} 2400w, ${dashboardHeroJpg3200} 3200w`"
                    sizes="100vw"
                    alt="Dashboard hero"
                    width="3200"
                    height="1803"
                    decoding="async"
                    fetchpriority="high"
                />
            </picture>
        </div>

        <ProjectDetailHeader
            title="IoT Adherence Analytics for Caregivers: Dashboard Design"
            client="Kin Technology"
            period="2026 - Ongoing"
        />

        <div class="project-body">
            <section>
                <h2>The Challenge</h2>
                <p>Kin needed to showcase the full digital experience of its product to secure future investments
                    and partnerships, particularly in healthcare sectors. One thing we wanted to demonstrate in
                    pitches is how user data collected from our IoT medication adherence platform can be transformed
                    into easy‑to‑digest insights for caregivers – helping them better understand their clients'
                    behavioural patterns and providing better quality of care with less effort. The task given was
                    to design a caregiver‑facing dashboard for the primary user's account within the web app that
                    would help them better understand and assist their client.</p>
            </section>

            <section class="project-role">
                <h2>My role</h2>
                <p>Sole designer on this project.<br>Responsible for:</p>
                <ul>
                    <li>UX</li>
                    <li>UI</li>
                    <li>User research</li>
                    <li>Product strategy</li>
                    <li>Problem framing</li>
                    <li>Stakeholder communication</li>
                    <li>Data visualisation</li>
                    <li>Design system</li>
                    <li>Prototyping</li>
                </ul>
            </section>

            <section>
                <h2>Problem framing</h2>

                <h3>1. Identify the scope of content</h3>
                <p>The caregiver user group here and their corresponding business context provide an important
                    constraint on the type of dashboard to aim for – a slightly data‑rich consumer dashboard. User
                    research was crucial for us in narrowing down the scope of relevant content in the discovery
                    phase. Taking a holistic approach in exploring the available materials, I summarised the
                    findings in a hybrid affinity‑interrelationship diagram by synthesising user interview insights
                    with product features, encompassing details on functionality, primary user datasets, metrics,
                    and end‑user needs. This helped to identify dashboard contents that are most relevant to our
                    users.</p>

                <p>Although the project was set out to mainly show simple adherence‑related analytics for
                    caregivers, the user research revealed two main expectations on the functionality of the
                    dashboard:</p>

                <p>(1) Behavioural insights of primary user<br>
                    (2) Quick access to the key operational statuses such as the remote device status and medication
                    stock.</p>

                <p>Point 1 was anticipated. Point 2 makes sense in hindsight – as the dashboard is the home screen,
                    users would expect to find operational information there also. These two distinct expectations
                    became both the rationale and the blueprint for a layout that separates components by function.</p>

                <ZoomableImage
                    :src="svg1Cover"
                    :zoom-src="svg1"
                    alt="Affinity-Interrelationship Diagram"
                    caption="Affinity-Interrelationship Diagram based on user research findings"
                />

                <h3>2. Define the narrative</h3>
                <p>With the framework set, I turned to the narrative. Without a strategic narrative, users can
                    experience fatigue or miss key insights. It is also an opportunity to highlight and reinforce
                    features that contribute to the product's value proposition.</p>

                <p>Take the primary user's mobile app that I had previously made as an example. It functions as a
                    progress hub at the home screen. Its encouragement narrative uses simple data presentation to
                    trigger immediate impression and action. For instance, cumulative adherence appears as a
                    heart‑shaped progress graphic leveraging the cognitive tension from unfinished tasks. A dispense
                    streak leverages loss aversion. Both encourage adherence behaviour.</p>

                <p>Based on user research, the caregiver dashboard needs a synopsis narrative. Caregivers have more
                    capacity to explore data than primary users, but they are not analysts – nor do they necessarily
                    have the time for data discovery in their daily work. Therefore, while they can handle
                    multivariate plots, the data visualisation should be simple and highlight straightforward
                    patterns and trends. For example, a daily adherence trend that also shows missed doses that were
                    later compensated by an ad‑hoc dispense; a chart showing when missed doses most often occur.
                    The aim is data visualisation that provides constructive feedback to drive positive behaviour
                    for both caregiver and client.</p>
            </section>

            <section>
                <h2>Design</h2>

                <h3>1. Plot first, compose later</h3>
                <p>I began by sketching a range of data visualisation widgets without worrying about screen layout.
                    Some charts were discarded early; others moved into high‑fidelity wireframes and prototypes. This
                    allowed the best solutions to emerge before I committed to composition. It also gave me early
                    artifacts to share with stakeholders, speeding up iterations.</p>

                <div class="full-image">
                    <img :src="img2" alt="Mockups" loading="lazy" decoding="async" />
                    <p class="caption">On the left: mockups of primary user's mobile dashboard. On the right:
                        wireframes for caregiver-facing dashboard.</p>
                </div>

                <h3>2. Design for accessibility</h3>
                <p>I updated the colour system of the product by adding new accent colours to accommodate the
                    dashboard design. Consistent with the rest of the product, I optimised the design according to
                    WCAG criteria of accessibility. To improve distinguishability, colour contrast for text and
                    graphics was audited using WebAIM and adjusted to meet WCAG 2.1 AA. When colour contrast was
                    deemed insufficient, I used borders to improve accessibility of graphics. Interactive dynamic
                    features were incorporated in charts to enable isolating datasets for clarity.</p>

                <p>For understandability, every chart includes data labels. This ensures comprehension is not
                    reliant on plotting style alone – supporting both novice users and those with reduced colour
                    perception.</p>

                <p>Alongside text labels, I also ensured consistent association between categorical variables and
                    distinctive colours within the constraints of the colour palette. This not only provides
                    interface consistency but can also improve data comprehension by leveraging the brain's ability
                    to process colours much faster than words.</p>

                <div class="full-image">
                    <img
                        :src="img3"
                        alt="Colour system"
                        width="2882"
                        height="1623"
                        loading="lazy"
                        decoding="async"
                    />
                    <p class="caption">Colour palettes for the dashboard design with colour contrast audit for WCAG
                        compliance</p>
                </div>

                <h3>3. Optimising visual perception for the narrative</h3>
                <p>To optimise comprehension of multivariate data, I prioritised familiar chart types, such as bar,
                    pie, and line, as they are already stored in our collective psyche. Nonetheless, choosing the
                    right graph for a particular dataset requires holistic consideration of context, narrative,
                    aesthetics, and practical UX.</p>

                <p>For example, it is feasible to present the summary of the type and punctuality of dispenses,
                    which are made up of distinct data categories, in either a bar chart, pie chart, or donut chart.
                    The goal of this particular data visualisation is to show the proportions of the categories in
                    order to highlight edge cases, some of which are undesirable behaviour outcomes of primary users.
                    A priori is that, with optimal usage of our product, the dataset is going to be heavily dominated
                    by one category. In this case, the circular chart type trumps the bar chart for two reasons:</p>

                <p>(1) In the sense of aesthetics and practical UX, a circular chart leaves no empty spaces that
                    might give the impression of incompleteness when the dataset is dominated by one category. This
                    provides a more intuitive, compact, and harmonious visualisation than a bar chart.</p>

                <p>(2) For highlighting edge cases, elements that disrupt a circle or continuous ring, combined
                    with high‑contrast colours, are far more visually striking than short blocks that rise above the
                    axis in a bar chart.</p>

                <p>Therefore, it is more effective in conveying the narrative we aimed for. As to whether a pie or
                    donut chart is preferred, the donut has the advantage of enabling better perception of the
                    proportions of the wedges: the human brain is biased toward reading lengths (the arc) more
                    accurately than areas or angles.</p>

                <div class="full-image">
                    <img
                        :src="img4"
                        alt="Design iterations"
                        width="2617"
                        height="647"
                        loading="lazy"
                        decoding="async"
                    />
                    <p class="caption">Design iterations of Dispense Summary</p>
                </div>

                <h3>4. Integrating multiple variables without losing clarity</h3>
                <p>Adherence is the most important KPI of the product for users. Although a single‑number cumulative
                    average is an impactful quick overview, a daily trend is highly informative. It helps track the
                    primary user's performance in real time and reveal behaviour patterns. Crucially, in our product,
                    adherence is not just the result of the primary user's interaction with the IoT platform.
                    Caregiver intervention via remote ad‑hoc dispense of missed dose (Missed‑dose Dispense) also
                    influences the adherence outcome. Showing both together gives users an integrated view of
                    behaviour which also directly addresses needs that emerged in user research.</p>

                <p>However, overlaying variables is double‑edged. The visual comparison helps users, but the
                    complexity can be confusing. I addressed this by adding toggles that allow users to select the
                    variables they wished to display. I also included a hover data label that summarises all
                    variables at a specific time point, helping users interpret the graph without guesswork.</p>

                <div class="video-pair">
                    <div class="video-pair-videos">
                        <div class="video-pair-media">
                            <video
                                class="project-video"
                                :src="vid5"
                                width="2212"
                                height="1434"
                                style="aspect-ratio: 2212 / 1434"
                                autoplay
                                loop
                                muted
                                playsinline
                            />
                        </div>
                        <div class="video-pair-media">
                            <video
                                class="project-video"
                                :src="vid6"
                                width="2212"
                                height="1432"
                                style="aspect-ratio: 2212 / 1432"
                                autoplay
                                loop
                                muted
                                playsinline
                            />
                        </div>
                    </div>
                    <p class="caption">Prototype of Missed Dose Insights</p>
                </div>

                <h3>5. From logs to insights</h3>
                <p>Another aspect of the project involved exploring log data that users may not readily recognise
                    but that offers meaningful insight into client behaviour. For example, users wanted to know more
                    about missed doses, specifically what time of day they usually happen. This led me to present
                    the log of when primary users first miss a dose during a previously scheduled dispense
                    (Scheduled Dispense).</p>

                <p>The timing and quantity of initial missed doses are informative, though they do not always
                    correspond to final missed doses, as some are later corrected via Missed‑dose Dispense. I
                    therefore needed to present both datasets in a way that allows users to perceive their
                    relationship and differences with minimal cognitive effort.</p>

                <p>I explored several approaches. For data visualisation, I implemented the following:</p>

                <p>(1) Division of the day into six time bins, which simplifies presentation and aligns with typical
                    daily routines.<br>
                    (2) Inclusion of Scheduled Dispense data as a baseline for comparison with missed doses.<br>
                    (3) Use of dynamic text labels to highlight key takeaways.</p>

                <p>For interactivity, I added the following features:</p>

                <p>(1) A toggle to show or hide Missed‑dose Dispense data, enabling users to explore the relationship
                    between datasets.<br>
                    (2) Expandable tooltips to clarify unfamiliar variables and reduce confusion.<br>
                    (3) Hover‑activated data labels that provide precise quantitative information on specific data
                    segments.</p>

                <h3>6. Divide and conquer</h3>
                <p>Early in discovery, I identified two distinct user goals when engaging with the dashboard: (1)
                    gaining insights into client behaviour, and (2) checking key operational statuses of the remote
                    device. These two goals required a clear division of content to minimise friction that users
                    could experience while seeking for information.</p>

                <p>I addressed this by introducing a retractable sidebar to contain operational status modules – a
                    feature that is distinct from the dashboard but visually integrated as part of it. The enforced
                    perceptual grouping, as the result of creating boundaries between the two sets of content, makes
                    their distinct purposes immediately clear.</p>

                <p>Given the time‑sensitive nature of the sidebar content, this isolated section supports a higher
                    auto‑refresh rate than the rest of the dashboard, so users always see the latest operational
                    data. In the edge case of connection lost, a timestamp appears to clarify that the data is not
                    live, helping instil user confidence in the application's reliability.</p>

                <p>I also took care to keep the sidebar content concise, showing only important snippets so they
                    don't overshadow the main app features where users can find more detailed information.</p>

                <div class="full-image">
                    <video
                        class="project-video"
                        :src="vid7"
                        width="2140"
                        height="1432"
                        style="aspect-ratio: 2140 / 1432"
                        autoplay
                        loop
                        muted
                        playsinline
                    />
                </div>
            </section>

            <section>
                <h2>Results</h2>
                <p>The dashboard design was a crucial part of the company's investor pitch, demonstrating how IoT
                    data could be translated into easily digestible and actionable insights for caregivers. It was
                    well received by investors, who noted clear consideration of the specific context of the
                    healthcare sector and attention to the target user's needs.</p>

                <p>In a feedback session with 6 caregivers, all participants responded positively to the UX and
                    visual design, and specifically highlighted the clarity of the data presentation. Most found the
                    layout intuitive and easy to navigate, while a few found that a simple product tour could be
                    beneficial given the number of modules present. The design was also successful in highlighting
                    features that contribute to the IoT product's value proposition, in particular the remote
                    dispense function, for which caregivers are primary users. In general, the caregivers felt that
                    the product feature could help improve the quality of care that they can deliver by lowering the
                    effort required for monitoring and understanding their clients' behaviours.</p>

                <p>From an engineering perspective, the prototypes established a clear path for backend data
                    structure and integration with the hardware solution. This was made possible by the attention
                    not only to visual aspects, but to the user lifecycle, data requirements and hardware
                    constraints.</p>

                <p>Overall, the project succeeded in achieving its 0‑to‑1 objectives and laid the groundwork for
                    subsequent design and development initiatives.</p>
            </section>
        </div>
    </ProjectDetail>
</template>

<script>
import ProjectDetail from './ProjectDetail.vue'
import ProjectDetailHeader from '../components/ProjectDetailHeader.vue'
import ZoomableImage from '../components/ZoomableImage.vue'
import dashboardHeroWebp2400 from '../assets/1_dashboard/0_dashboard_hero_detail-2400.webp'
import dashboardHeroWebp3200 from '../assets/1_dashboard/0_dashboard_hero_detail-3200.webp'
import dashboardHeroJpg2400 from '../assets/1_dashboard/0_dashboard_hero_detail-2400.jpg'
import dashboardHeroJpg3200 from '../assets/1_dashboard/0_dashboard_hero_detail-3200.jpg'
import svg1Cover from '../assets/1_dashboard/1_affinity_interrelation_diagram_cover.svg'
import svg1 from '../assets/1_dashboard/1_affinity_interrelation_large_margin.svg'
import img2 from '../assets/1_dashboard/2_primary_user_vs_caregiver_dashboard.webp'
import img3 from '../assets/1_dashboard/3_colour_system_portfolio.jpg'
import img4 from '../assets/1_dashboard/4_dispense_summary_portfolio.jpg'
import vid5 from '../assets/1_dashboard/5_adherence_trend_width.mov'
import vid6 from '../assets/1_dashboard/6_missed_dose_insights_width.mov'
import vid7 from '../assets/1_dashboard/7_caregiver_dashboard_width.mov'

export default {
    name: 'DashboardDesign',
    components: { ProjectDetail, ProjectDetailHeader, ZoomableImage },
    data() {
        return {
            dashboardHeroWebp2400,
            dashboardHeroWebp3200,
            dashboardHeroJpg2400,
            dashboardHeroJpg3200,
            svg1Cover,
            svg1,
            img2,
            img3,
            img4,
            vid5,
            vid6,
            vid7,
        }
    },
}
</script>
