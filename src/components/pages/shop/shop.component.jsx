import React from 'react'
import SHOP_DATA from './shop_data'
import CollectionPreview from '../../collection-preview/collection-preview.component'

class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { collections: SHOP_DATA }
  }
  render() {
    const { collections } = this.state
    return (
      <div>
        <div>Shop Data</div>
        {collections.map(({ id, title, items }) => (
          <CollectionPreview key={id} title={title} items={items} />
        ))}
      </div>
    )
  }
}

export default ShopPage
