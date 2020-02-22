import React, { Component } from 'react';
import resumeData from '../resumeData';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email: ylt1215 at cs.washinton.edu</h4>
                <h4>Linked in:&nbsp;<a target="_blank" rel="noopener noreferrer" href={`https://www.linkedin.com/in/${resumeData.linkedinId}`}>{resumeData.linkedinId}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
