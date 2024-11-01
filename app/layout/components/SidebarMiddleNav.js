import React from "react";

import { SidebarMenu } from "./../../components";

export const SidebarMiddleNav = () => (
  <SidebarMenu>
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-home"></i>}
      title="Dashboards"
    >
      {/* Dashboards Items */}

      <SidebarMenu.Item title="Analytics" to="/dashboards/analytics" exact />
      {/* <SidebarMenu.Item title="Projects" to="/dashboards/projects" exact /> */}
      <SidebarMenu.Item
        title="Incident Register"
        to="/dashboards/system"
        exact
      />
      <SidebarMenu.Item title="Monitor" to="/dashboards/monitor" exact />
      <SidebarMenu.Item title="Financial" to="/dashboards/financial" exact />
      {/* <SidebarMenu.Item title="Stock" to='/dashboards/stock' exact />
     <SidebarMenu.Item title="Reports" to='/dashboards/reports' exact /> */}
    </SidebarMenu.Item>

    {/* -------- Graphs ---------*/}
    {/* <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-pie-chart"></i>}
      title="Graphs"
    >
      <SidebarMenu.Item title="ReCharts" to="/graphs/re-charts" />
    </SidebarMenu.Item> */}
    {/* -------- Forms ---------*/}
    <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-check-square-o"></i>}
            title="Forms"
        >
            <SidebarMenu.Item title="Forms" to='/forms/forms' />
            <SidebarMenu.Item title="Forms Layouts" to='/forms/forms-layouts' />
            <SidebarMenu.Item title="Input Groups" to='/forms/input-groups' />
            <SidebarMenu.Item title="Wizard" to='/forms/wizard' />
            <SidebarMenu.Item title="Text Mask" to='/forms/text-mask' />
            <SidebarMenu.Item title="Typeahead" to='/forms/typeahead' />
            <SidebarMenu.Item title="Toggles" to='/forms/toggles' />
            <SidebarMenu.Item title="Editor" to='/forms/editor' />
            <SidebarMenu.Item title="Date Picker" to='/forms/date-picker' />
            <SidebarMenu.Item title="Dropzone" to='/forms/dropzone' />
            <SidebarMenu.Item title="Sliders" to='/forms/sliders' />
        </SidebarMenu.Item>
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-check-square-o"></i>}
      title="Admin Panel"
    >
      <SidebarMenu.Item title="Incident Management" to="/forms/forms" />
      <SidebarMenu.Item title="Officer Management" to="/forms/forms-layouts" />
      <SidebarMenu.Item title="Reports" to="/forms/input-groups" />
      <SidebarMenu.Item title="Profile Settings" to="/forms/wizard" />
    </SidebarMenu.Item>
    {/* -------- Tables ---------*/}
    <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-trello"></i>}
      title="Officer Panel"
    >
      <SidebarMenu.Item title="Assigned Incidents" to="/tables/tables" />
      <SidebarMenu.Item
        title="Incident Detail View"
        to="/tables/extended-table"
      />
      <SidebarMenu.Item title="Status Updates" to="/tables/ag-grid" />
    </SidebarMenu.Item>
    {/* -------- Apps ---------*/}
    {/* <SidebarMenu.Item
      icon={<i className="fa fa-fw fa-mouse-pointer"></i>}
      title="Apps"
    >
      <SidebarMenu.Item title="Projects">
        <SidebarMenu.Item title="Projects List" to="/apps/projects/list" />
        <SidebarMenu.Item title="Projects Grid" to="/apps/projects/grid" />
      </SidebarMenu.Item>
      <SidebarMenu.Item title="Tasks">
        <SidebarMenu.Item title="Tasks List" to="/apps/tasks/list" />
        <SidebarMenu.Item title="Tasks Grid" to="/apps/tasks/grid" />
        <SidebarMenu.Item title="Tasks Kanban" to="/apps/tasks-kanban" />
        <SidebarMenu.Item title="Tasks Details" to="/apps/task-details" />
      </SidebarMenu.Item>
      <SidebarMenu.Item title="Files">
        <SidebarMenu.Item title="Files List" to="/apps/files/list" />
        <SidebarMenu.Item title="Files Grid" to="/apps/files/grid" />
      </SidebarMenu.Item>
      <SidebarMenu.Item title="Search Results">
        <SidebarMenu.Item title="Search Results" to="/apps/search-results" />
        <SidebarMenu.Item title="Images Results" to="/apps/images-results" />
        <SidebarMenu.Item title="Videos Results" to="/apps/videos-results" />
        <SidebarMenu.Item title="Users Results" to="/apps/users-results" />
      </SidebarMenu.Item>
      <SidebarMenu.Item title="Users">
        <SidebarMenu.Item title="Users List" to="/apps/users/list" />
        <SidebarMenu.Item title="Users Grid" to="/apps/users/grid" />
      </SidebarMenu.Item>
      <SidebarMenu.Item title="Gallery">
        <SidebarMenu.Item title="Gallery Grid" to="/apps/gallery-grid" />
        <SidebarMenu.Item title="Gallery Table" to="/apps/gallery-table" />
      </SidebarMenu.Item>
      <SidebarMenu.Item title="Mailbox">
        <SidebarMenu.Item title="Inbox" to="/apps/inbox" />
        <SidebarMenu.Item title="New Email" to="/apps/new-email" />
        <SidebarMenu.Item title="Email Details" to="/apps/email-details" />
      </SidebarMenu.Item>
      <SidebarMenu.Item title="Profile">
        <SidebarMenu.Item title="Profile Details" to="/apps/profile-details" />
        <SidebarMenu.Item title="Profile Edit" to="/apps/profile-edit" />
        <SidebarMenu.Item title="Account Edit" to="/apps/account-edit" />
        <SidebarMenu.Item title="Billing Edit" to="/apps/billing-edit" />
        <SidebarMenu.Item title="Settings Edit" to="/apps/settings-edit" />
        <SidebarMenu.Item title="Sessions Edit" to="/apps/sessions-edit" />
      </SidebarMenu.Item>
      <SidebarMenu.Item title="Clients" to="/apps/clients" exact />
      <SidebarMenu.Item title="Chat" to="/apps/chat" exact />
    </SidebarMenu.Item> */}
    {/* -------- Pages ---------*/}
    {/* <SidebarMenu.Item icon={<i className="fa fa-fw fa-copy"></i>} title="Pages">
      <SidebarMenu.Item title="Register" to="/pages/register" />
      <SidebarMenu.Item title="Login" to="/pages/login" />
      <SidebarMenu.Item title="Forgot Password" to="/pages/forgot-password" />
      <SidebarMenu.Item title="Lock Screen" to="/pages/lock-screen" />
      <SidebarMenu.Item title="Error 404" to="/pages/error-404" />
      <SidebarMenu.Item title="Confirmation" to="/pages/confirmation" />
      <SidebarMenu.Item title="Success" to="/pages/success" />
      <SidebarMenu.Item title="Danger" to="/pages/danger" />
      <SidebarMenu.Item title="Coming Soon" to="/pages/coming-soon" />
      <SidebarMenu.Item title="Timeline" to="/pages/timeline" />
    </SidebarMenu.Item> */}
    {/* <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-star-o"></i>}
            title="Icons"
            to='/icons'
        /> */}
    {/* <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-bookmark-o"></i>}
            title="Docs"
            href='https://webkom.gitbook.io/spin/v/airframe/airframe-react/documentation-react'
        /> */}
    {/* -------- Versions ---------*/}
    {/* <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-folder-open-o"></i>}
            title="Versions"
        >
            <SidebarMenu.Item title="NextJS (React)" href='http://airframe.nextjs.webkom.co/' />
            <SidebarMenu.Item title="React" href='http://dashboards.webkom.co/react/airframe' />
            <SidebarMenu.Item title="jQuery" to="http://dashboards.webkom.co/jquery/airframe/" />
            <SidebarMenu.Item title="Vue" to="http://dashboards.webkom.co/vue/airframe" />
            <SidebarMenu.Item title="Angular" to="http://dashboards.webkom.co/angular/airframe" />
            <SidebarMenu.Item title=".NET MVC" to="http://dashboards.webkom.co/net-mvc/airframe" />
        </SidebarMenu.Item> */}
  </SidebarMenu>
);
