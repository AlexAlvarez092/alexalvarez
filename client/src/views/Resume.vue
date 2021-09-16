<template>
<div class="container">
  <h3>Resume</h3>
  <div class="timeline">
    <ResumeBlock :elem="elem" v-for="elem in resumeElements" :key="elem.title" />
  </div>
  <div class="btn">
    <router-link :to="{ name: 'Home' }">
      <i class="far fa-file-user"></i>
      <span>Home</span>
    </router-link>
  </div>
</div>
</template>

<script>
import ResumeBlock from '@/components/ResumeBlock.vue';

export default {
  name: 'Resume',
  data() {
    return {
      resumeElements: [
        {
          id: 1,
          type: 'experience',
          title: 'ServiceNow Consultant',
          dates: '2021-Present',
          issuer: 'Atlafy',
        },
        {
          id: 2,
          type: 'experience',
          title: 'ServiceNow Senior Consultant',
          dates: '2021-2021',
          issuer: 'Devoteam',
        },
        {
          id: 3,
          type: 'certification',
          title: 'ServiceNow CIS Project Portfolio Management',
          dates: '2020',
          issuer: 'ServiceNow',
        },
        {
          id: 4,
          type: 'certification',
          title: 'SCRUM Foundation Professional Certificate',
          dates: '2020',
          issuer: 'Certiprof',
        },
        {
          id: 5,
          type: 'experience',
          title: 'ServiceNow Junior Consultant',
          dates: '2019-2021',
          issuer: 'DXC Technology',
        },
        {
          id: 6,
          type: 'certification',
          title: 'ServiceNow Certified Application Development',
          dates: '2019',
          issuer: 'ServiceNow',
        },
        {
          id: 7,
          type: 'certification',
          title: 'ServiceNow Certified System Administrator',
          dates: '2019',
          issuer: 'ServiceNow',
        },
        {
          id: 8,
          type: 'experience',
          title: 'Linux System Administrator',
          dates: '2017-2019',
          issuer: 'Capgemini',
          description: '<div class="left-align"><p>During that period of time, I worked as Tier 3 Service Support for Telefonica S.A.U in the area of Operational Service Systems.</p><p>My duties were the maintenance of some applications in a production environment. In my day to day I used to do:</p><ul><li>End-user incidents resolution</li><li>Resolution of high severity incidents working together with other technical groups (some times live meetings)</li><li>Change deployments</li><li>Shell scripting</li><li>SQL queries</li><li>High level revision of file systems, network interfaces, middleware & front-end servers, Oracle databases, process status, logs, mainframe jobs.</li></ul><p>I`ve acquired some knowledge on the <strong>iTIL Framework</strong>, Oracle DBA, HP Server Monitoring. IBM Mainframe, BMC Remedy ITSM and Linux administration.</p></div>',
        },
        {
          id: 9,
          type: 'education',
          title: 'Computer Communications And Networking HNC',
          dates: '2015-2017',
          issuer: 'CIFP Cerdeño',
        },
        {
          id: 10,
          type: 'certification',
          title: 'RPAS Pilot',
          dates: '22016',
          issuer: 'Asturavia 87',
        },
      ],
    };
  },
  components: {
    ResumeBlock,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 36px;
    line-height: 36px;
  }
  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  .timeline::after {
    content: '';
    position: absolute;
    width: 8px;
    background-color: var(--crayolas-outer-space);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -4px;
  }
  /* Media queries - Responsive timeline on screens less than 800px wide */
  @media (max-width: 800px) {
    /* Place the timelime to the left */
    .timeline::after {
      left: 32px;
    }
  }
}
.btn {
  background-color: var(--crayolas-outer-space);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  font-weight: bold;
  margin: 0 8px 36px 0px;
  padding: 20px;
  width: 150px;
  font-size: 24px;
  line-height: 24px;
  font-weight: 50;
  align-self: center;
  a {
    text-decoration: none;
    color: var(--snow);
  }
  &:hover {
    background-color: var(--snow);
    a {
      color: var(--crayolas-outer-space);
    }
  }
  span {
    margin-left: 8px;
  }
  @media (max-width: 800px) {
    align-self: start;
  }
}
</style>
