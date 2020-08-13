import React from "react";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

import "./collection.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

//NOTE: this DOESN'T use createStructuredSelector -- NOT MEMO-IZED
const mapStateToProps = (state, ownProps) => ({
  //Notice how state is passed into the function returned by selectCollection(url id)!
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
