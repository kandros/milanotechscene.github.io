var React = require('react');

var ManifestoText = React.createClass({
  render: function() {
    return (
        <div className="manifesto">
          <h2 className="manifesto__heading">Our Manifesto </h2>
          <p>Milano Tech Scene assemble all  the communities of digital technologies builders in Milan. Groups,  meetups, workshops and events for software developers, digital  designers, devops and data scientists in one single place.
          </p>
          <p>
              We believe that communities are where a lot of the knowledge is, grow and spread around.
              Milano is living a renaissance since 2010 and many new communities about digital technologies are also emerging.
          </p>
          <p>
              The objective of Milano Tech Scene, MTS for friends, is to provide a single point of access to what's here and what's going on, providing informations about existing groups and a shared calendar of relevant events.
          </p>
          <p>
              MTS scope extends to organize a few meetups with topics that are good for any technologist and not specific to any other group. Also MTS can be used to incubate new meetups, helping them to grow and spread. </p>
          <p></p>
        </div>
    )
  }
});


module.exports = ManifestoText;
